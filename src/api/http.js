const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3030";

export async function request(method, url, body) {
    const res = await fetch(`${BASE_URL}${url}`, {
        method,
        headers: body ? {"Content-Type": "application/json"} : undefined,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok){
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed: ${res.status}`);
    }

    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;

    return res.json();
}