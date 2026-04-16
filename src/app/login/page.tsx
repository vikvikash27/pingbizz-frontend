"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// New Line for FIxing the logging issue



type LoginResponse =
  | { access_token: string; refresh_token?: string }
  | { data: { access_token: string; refresh_token?: string } };

type MeResponse = {
  id: string;
  email: string;
  name: string;
  role: string;
  org_id: string | null;
};

// New Code for fixing the logging issue

/* ⬇⬇⬇ PASTE THIS EXACTLY HERE ⬇⬇⬇ */
function getErrMsg(e: any) {
  if (!e) return "Login failed";
  if (typeof e === "string") return e;
  if (e instanceof Error) return e.message;
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}
/* ⬆⬆⬆ END PASTE ⬆⬆⬆ */


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@pingbiz.local");
  const [password, setPassword] = useState("PingBiz@1234");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    try {
      // 1) login
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const raw = (await res.json()) as any;
      const payload = raw?.data ?? raw;

      if (!res.ok) {
        throw new Error(payload?.error?.message || payload?.detail || "Login failed");
      }

      if (!payload?.access_token) {
        throw new Error("Login response missing access_token");
      }

      // ✅ Standardize storage keys
      localStorage.setItem("access_token", payload.access_token);
      if (payload.refresh_token) localStorage.setItem("refresh_token", payload.refresh_token);

      // 2) fetch /me to know role + org_id
      const meRes = await fetch(`${API}/me`, {
        headers: {
          Authorization: `Bearer ${payload.access_token}`,
        },
      });

      const meJson = await meRes.json();
      const mePayload = meJson?.data ?? meJson;

      if (!meRes.ok) {
        throw new Error(mePayload?.detail || "Failed to fetch user profile");
      }

      const me = mePayload as MeResponse;

      // 3) Tenant-only login page
      if (!me.org_id) {
        // This is internal user (SUPER_ADMIN), send them to internal login
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        throw new Error("This is not a business account. Use /internal/login");
      }

      // Optional: store user profile for UI
      localStorage.setItem("pingbiz_user", JSON.stringify(me));

      // 4) route by role (tenant world)
      router.push("/dashboard");
    } catch (e: any) {
  console.error("LOGIN_ERROR:", e);
  setErr(getErrMsg(e));
} finally {
  setLoading(false);
}

  }

  return (
    <div className="min-h-screen bg-[#070A0F] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-2xl font-semibold">Sign in to PingBiz</h1>
        <p className="mt-2 text-white/70 text-sm">
          Use your business account credentials.
        </p>

        {err && (
          <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs text-white/70">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#25D366]/60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@business.com"
              type="email"
              required
            />
          </div>

          <div>
            <label className="text-xs text-white/70">Password</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#25D366]/60"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              type="password"
              required
            />
          </div>

          <button
            disabled={loading}
            className="w-full rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-black hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-xs text-white/60">
          PingBiz Admin? Go to{" "}
          <a className="text-[#25D366]" href="/internal/login">
            /internal/login
          </a>
        </div>
      </div>
    </div>
  );
}
