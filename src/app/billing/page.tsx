"use client";

import { useEffect, useMemo, useState } from "react";
import { getRoleFromStorage } from "@/lib/permissions";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

function cx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

type OrgSettings = {
  plan_tier?: string;
  business_name?: string;
  trial_ends_at?: string | null;
};

export default function BillingPage() {
  const role = useMemo(() => getRoleFromStorage(), []);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState<OrgSettings | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [upgrading, setUpgrading] = useState<string | null>(null);

  useEffect(() => {
    // UI guard (backend will also block)
    if (role !== "owner" && role !== "admin") {
      setErr("You do not have access to Billing.");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const token = localStorage.getItem("pingbiz_token");
        const res = await fetch(`${API}/org/settings`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.detail || "Failed to load billing");
        setSettings(data);
      } catch (e: any) {
        setErr(e.message || "Failed to load billing");
      } finally {
        setLoading(false);
      }
    })();
  }, [role]);

  async function upgrade(plan_tier: "starter" | "growth" | "pro") {
    try {
      setUpgrading(plan_tier);
      setErr(null);

      const token = localStorage.getItem("pingbiz_token");
      const res = await fetch(`${API}/billing/upgrade`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan_tier }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.detail || "Upgrade failed");

      // refresh settings
      const s2 = await fetch(`${API}/org/settings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const d2 = await s2.json();
      setSettings(d2);
      alert(`Upgraded to ${plan_tier.toUpperCase()} ✅`);
    } catch (e: any) {
      setErr(e.message || "Upgrade failed");
    } finally {
      setUpgrading(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#070A0F] text-white px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-semibold">Billing</h1>
        <p className="mt-2 text-white/70 text-sm">
          Upgrade plan manually for now (Patna-friendly). You can collect
          payment via UPI and then click upgrade.
        </p>

        {loading && <div className="mt-6 text-white/60">Loading…</div>}

        {err && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
            {err}
          </div>
        )}

        {settings && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-white/70">Current Plan</div>
            <div className="mt-1 text-xl font-semibold">
              {(settings.plan_tier || "free_trial").toUpperCase()}
            </div>
            {settings.trial_ends_at && (
              <div className="mt-2 text-xs text-white/55">
                Trial ends at: {settings.trial_ends_at}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <PlanCard
            title="Starter"
            price="₹799 / month"
            desc="Small shops & solo businesses"
            onUpgrade={() => upgrade("starter")}
            loading={upgrading === "starter"}
          />
          <PlanCard
            title="Growth"
            price="₹1499 / month"
            desc="Growing teams (Most Popular)"
            highlight
            onUpgrade={() => upgrade("growth")}
            loading={upgrading === "growth"}
          />
          <PlanCard
            title="Pro"
            price="₹2999 / month"
            desc="Sales teams & agencies"
            onUpgrade={() => upgrade("pro")}
            loading={upgrading === "pro"}
          />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <div className="font-semibold text-white">Custom pricing?</div>
          <div className="mt-1">
            For enterprise: share requirements on WhatsApp and we will activate
            plan manually.
          </div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({
  title,
  price,
  desc,
  highlight,
  onUpgrade,
  loading,
}: {
  title: string;
  price: string;
  desc: string;
  highlight?: boolean;
  onUpgrade: () => void;
  loading: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border p-5",
        highlight
          ? "border-emerald-400/40 bg-emerald-500/10"
          : "border-white/10 bg-white/5",
      )}
    >
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/70">{desc}</div>
      <div className="mt-4 text-2xl font-semibold">{price}</div>

      <button
        onClick={onUpgrade}
        disabled={loading}
        className={cx(
          "mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold transition",
          highlight
            ? "bg-emerald-400 text-black hover:brightness-110"
            : "bg-white/10 text-white hover:bg-white/15",
          loading && "opacity-60",
        )}
      >
        {loading ? "Upgrading…" : `Upgrade to ${title}`}
      </button>

      <div className="mt-4 text-xs text-white/55">
        Tip: collect payment via UPI → then click Upgrade.
      </div>
    </div>
  );
}
