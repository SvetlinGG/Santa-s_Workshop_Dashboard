// Mock data for development
const mockToys = [
  { id: "1", name: "Wooden Train", category: "Toys", difficulty: "Easy", inStock: true },
  { id: "2", name: "Teddy Bear", category: "Plush", difficulty: "Medium", inStock: false },
  { id: "3", name: "Robot Kit", category: "Electronics", difficulty: "Hard", inStock: true }
];

const mockOrders = [
  { id: "1", status: "pending", child: "Alice" },
  { id: "2", status: "completed", child: "Bob" }
];

const mockElves = [
  { id: "1", name: "Buddy", isActive: true },
  { id: "2", name: "Jingle", isActive: false }
];

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3030";

export async function request(method, url, body) {
    // Use mock data for development
    if (url === "/toys") return mockToys;
    if (url === "/orders") return mockOrders;
    if (url === "/elves") return mockElves;
    if (url.startsWith("/toys/")) {
        const id = url.split("/")[2];
        return mockToys.find(t => t.id === id) || null;
    }
    
    // Original fetch logic (commented out until server is ready)
    /*
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
    */
    
    return null;
}