const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function apiFetch(path: string, options: RequestInit = {}) {
    const token =
        typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");
    if (token) headers.set("Authorization", `Bearer ${token}`);

    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers,
    });

    // If backend returns non-2xx, show error nicely
    if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed: ${res.status}`);
    }

    // some endpoints may return empty
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;

    return res.json();
}
