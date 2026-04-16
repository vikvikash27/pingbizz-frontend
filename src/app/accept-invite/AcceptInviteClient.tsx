"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function AcceptInviteClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token") ?? "";

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        if (!token) {
            setError("Invite token missing. Please open the correct link.");
        }
    }, [token]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!token) return;

        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const res = await fetch(`${API}/auth/accept-invite`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, name, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.detail || "Invite acceptance failed");
            }

            setSuccess("Account created successfully! Redirecting to login...");

            setTimeout(() => {
                router.push("/login");
            }, 1200);
        } catch (err: any) {
            setError(err.message || "Invite acceptance failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#070A0F] text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h1 className="text-2xl font-semibold">Accept Invite</h1>
                <p className="mt-2 text-sm text-white/70">
                    Set your name and password to activate your PingBiz account.
                </p>

                {error && (
                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="text-xs text-white/70">Your name</label>
                        <input
                            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[#25D366]/60"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-xs text-white/70">Create password</label>
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
                        disabled={loading || !token}
                        className="w-full rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-black hover:brightness-110 disabled:opacity-60 transition"
                    >
                        {loading ? "Creating…" : "Create Account"}
                    </button>
                </form>

                <div className="mt-6 text-xs text-white/55">
                    After account creation, you will be redirected to login.
                </div>
            </div>
        </div>
    );
}