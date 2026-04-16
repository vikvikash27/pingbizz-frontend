"use client";

import { useMemo, useState } from "react";

type Plan = {
  name: string;
  badge?: string;
  bestFor: string;
  priceMonthly?: number; // for paid plans
  isFreeTrial?: boolean;
  cta: string;
  popular?: boolean;
  accessLevels: string[];
  services: string[];
};

function cx(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

function CheckIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
      ✓
    </span>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans: Plan[] = useMemo(
    () => [
      {
        name: "Free Trial",
        badge: "₹0 · 7 Days",
        bestFor: "Best for: First-time users",
        isFreeTrial: true,
        cta: "Start Free Trial",
        accessLevels: [
          "👑 1 Admin – full control",
          "🎧 1 Support Assistant – view & reply only",
        ],
        services: [
          "WhatsApp API connection",
          "Live chat inbox",
          "Basic auto-reply (welcome / away)",
          "Human handover (bot → agent)",
          "Limited contacts & history",
          "PingBiz branding",
        ],
      },
      {
        name: "Starter",
        badge: "₹799 / month",
        bestFor: "Best for: Small shops & solo businesses",
        priceMonthly: 799,
        cta: "Start with Starter",
        accessLevels: [
          "👑 1 Admin - full control",
          "🧑‍💼 1 Managers (can update templates, cannot delete system settings)",
          "🎧 1 Support Assistant - view & reply only",
        ],
        services: [
          "Everything in Free Trial +",
          "Keyword-based auto replies",
          "Business hours automation",
          "Basic chatbot flow (FAQ)",
          "Contact tagging (up to 10)",
          "Shared inbox",
          "Basic analytics",
        ],
      },
      {
        name: "Growth",
        badge: "Most Popular",
        bestFor: "Best for: Growing teams",
        priceMonthly: 1499,
        cta: "Upgrade to Growth",
        popular: true,
        accessLevels: [
          "👑 1 Admin - full control",
          "🧑‍💼 2 Managers (can update templates, cannot delete system settings)",
          "🎧 1 Support Assistant - view & reply only",
        ],
        services: [
          "Everything in Starter +",
          "Advanced chatbot flows",
          "Campaign scheduler",
          "Broadcast with segmentation",
          "Tags (up to 25)",
          "Internal notes & comments",
          "Downloadable reports",
          "Chat assignment rules",
        ],
      },
      {
        name: "Pro",
        badge: "₹2999 / month",
        bestFor: "Best for: Sales-driven teams & agencies",
        priceMonthly: 2999,
        cta: "Go Pro",
        accessLevels: [
          "👑 1 Admin - full control",
          "🧑‍💼 3 Managers (can update templates, cannot delete system settings)",
          "🎧 3 Support Assistants - view & reply only",
        ],
        services: [
          "Everything in Growth +",
          "Lead pipeline (New → Won)",
          "Automated follow-ups",
          "Advanced campaign analytics",
          "Unlimited tags & attributes",
          "API access (limited)",
          "Webhooks",
          "Higher messaging speed",
          "Remove PingBiz branding",
          "Priority support",
        ],
      },
    ],
    [],
  );

  const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Pricing
          </h2>
          <p className="mt-2 text-white/70">
            Simple plans for local businesses. Upgrade as your leads grow.
          </p>
        </div>

        {/* Toggle (Optional) */}
        <div className="inline-flex w-fit items-center rounded-2xl border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={cx(
              "rounded-xl px-4 py-2 text-sm transition",
              billing === "monthly"
                ? "bg-white/10 text-white"
                : "text-white/60 hover:text-white",
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={cx(
              "rounded-xl px-4 py-2 text-sm transition",
              billing === "yearly"
                ? "bg-white/10 text-white"
                : "text-white/60 hover:text-white",
            )}
          >
            Annual (save)
          </button>
        </div>
      </div>

      {/* 4-card grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => {
          const isPopular = !!p.popular;

          const monthly = p.priceMonthly ?? 0;
          const yearly = monthly * 10; // 2 months free
          const showNumericPrice = typeof p.priceMonthly === "number";

          const priceValue = p.isFreeTrial
            ? "₹0"
            : billing === "monthly"
              ? formatINR(monthly)
              : formatINR(yearly);

          const priceUnit = p.isFreeTrial
            ? "· 7 Days"
            : billing === "monthly"
              ? "/ month"
              : "/ year";

          return (
            <div
              key={p.name}
              className={cx(
                "relative rounded-3xl border p-6",
                isPopular
                  ? "border-emerald-400/50 bg-emerald-500/10"
                  : "border-white/10 bg-white/5",
              )}
            >
              {isPopular && (
                <div className="absolute -top-3 left-6 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-white">
                    {p.name}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{p.bestFor}</div>
                </div>

                {p.badge && (
                  <div
                    className={cx(
                      "rounded-full border px-3 py-1 text-xs",
                      isPopular
                        ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                        : "border-white/10 bg-white/5 text-white/70",
                    )}
                  >
                    {p.badge}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mt-5">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-semibold text-white">
                    {priceValue}
                  </div>
                  <div className="text-sm text-white/60">{priceUnit}</div>
                </div>

                {p.isFreeTrial && (
                  <div className="mt-1 text-xs text-white/55">
                    No card required.
                  </div>
                )}

                {!p.isFreeTrial && showNumericPrice && billing === "yearly" && (
                  <div className="mt-1 text-xs text-white/55">
                    Save ~2 months vs monthly.
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href="#final-cta"
                className={cx(
                  "mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition",
                  isPopular
                    ? "bg-emerald-400 text-black hover:brightness-110"
                    : "bg-white/10 text-white hover:bg-white/15",
                )}
              >
                {p.cta}
              </a>

              {/* Access Levels */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-white/70">
                  Access Levels
                </div>
                <ul className="mt-3 space-y-2">
                  {p.accessLevels.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-white/75">
                      <span className="mt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-white/70">
                  Services
                </div>
                <ul className="mt-3 space-y-2">
                  {p.services.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-white/75">
                      <span className="mt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/55">
                WhatsApp template/message charges may apply based on usage.
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
