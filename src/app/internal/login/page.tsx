// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { login, me } from "@/lib/auth";

// export default function InternalLoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("superadmin@pingbiz.local");
//   const [password, setPassword] = useState("PingBiz@1234");
//   const [err, setErr] = useState<string | null>(null);

//   async function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setErr(null);
//     try {
//       await login(email, password);
//       const profile = await me();

//       if (profile.role !== "SUPER_ADMIN") {
//         throw new Error("Not a SUPER_ADMIN account.");
//       }

//       router.push("/internal");
//     } catch (e: any) {
//       setErr(e?.message || "Login failed");
//     }
//   }

//   return (
//     <div style={{ maxWidth: 420, margin: "60px auto" }}>
//       <h1>PingBiz Internal Login</h1>
//       <form onSubmit={onSubmit}>
//         <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"
//           style={{ width: "100%", padding: 10, marginTop: 10 }} />
//         <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password"
//           style={{ width: "100%", padding: 10, marginTop: 10 }} />
//         <button style={{ width: "100%", padding: 10, marginTop: 12 }}>
//           Login
//         </button>
//       </form>
//       {err && <p style={{ color: "red" }}>{err}</p>}
//     </div>
//   );
// }
// Temporary disable internal login page
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const API = "http://localhost:8000";

//const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

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

export default function InternalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("superadmin@pingbiz.local");
  const [password, setPassword] = useState("PingBiz@1234");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const raw = await res.json();
      const payload = raw?.data ?? raw;

      if (!res.ok) throw new Error(payload?.detail || "Login failed");

      localStorage.setItem("access_token", payload.access_token);
      if (payload.refresh_token) localStorage.setItem("refresh_token", payload.refresh_token);

      const meRes = await fetch(`${API}/me`, {
        headers: { Authorization: `Bearer ${payload.access_token}` },
      });
      const meJson = await meRes.json();
      const me = (meJson?.data ?? meJson) as MeResponse;

      if (!meRes.ok) throw new Error(me?.role ? "Failed to validate account" : "Auth failed");

      if (me.role !== "SUPER_ADMIN") {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        throw new Error("Not a SUPER_ADMIN account. Use /login");
      }

      localStorage.setItem("pingbiz_user", JSON.stringify(me));
      router.push("/internal");
    } catch (e: any) {
  console.error("LOGIN_ERROR:", e);
  setErr(getErrMsg(e));
} finally {
  setLoading(false);
}

  }

  return (
    <div className="min-hscreen bg-[#070A0F] text-white flex items-center justify-center px-4 min-h-screen">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-2xl font-semibold">PingBiz Internal</h1>
        <p className="mt-2 text-white/70 text-sm">SUPER_ADMIN login only.</p>

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
          Business user? Go to{" "}
          <a className="text-[#25D366]" href="/login">
            /login
          </a>
        </div>
      </div>
    </div>
  );
}
