import { apiFetch } from "./api";

export type MeResponse = {
    id: string;
    email: string;
    name: string;
    role: string;
    org_id: string | null;
};

export async function login(email: string, password: string) {
    const data = await apiFetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

    // expected keys: access_token, refresh_token (adjust if yours differs)
    localStorage.setItem("access_token", data.access_token);
    if (data.refresh_token) localStorage.setItem("refresh_token", data.refresh_token);

    return data;
}

export async function me(): Promise<MeResponse> {
    return apiFetch("/api/auth/me");
}

export function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
}
