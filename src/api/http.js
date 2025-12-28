// Mock data for development
const mockToys = [
  // Toys
  { id: "1", name: "Wooden Train", category: "Toys", difficulty: "Easy", inStock: true },
  { id: "2", name: "Building Blocks", category: "Toys", difficulty: "Easy", inStock: true },
  { id: "3", name: "Puzzle Game", category: "Toys", difficulty: "Medium", inStock: false },
  { id: "4", name: "Remote Car", category: "Toys", difficulty: "Hard", inStock: true },
  
  // Plush
  { id: "5", name: "Teddy Bear", category: "Plush", difficulty: "Medium", inStock: false },
  { id: "6", name: "Stuffed Elephant", category: "Plush", difficulty: "Easy", inStock: true },
  { id: "7", name: "Unicorn Plush", category: "Plush", difficulty: "Medium", inStock: true },
  { id: "8", name: "Dragon Soft Toy", category: "Plush", difficulty: "Hard", inStock: false },
  
  // Electronics
  { id: "9", name: "Robot Kit", category: "Electronics", difficulty: "Hard", inStock: true },
  { id: "10", name: "LED Light Set", category: "Electronics", difficulty: "Medium", inStock: true },
  { id: "11", name: "Music Box", category: "Electronics", difficulty: "Easy", inStock: false },
  { id: "12", name: "Smart Watch", category: "Electronics", difficulty: "Hard", inStock: true },
  
  // Games
  { id: "13", name: "Chess Set", category: "Games", difficulty: "Medium", inStock: true },
  { id: "14", name: "Card Game", category: "Games", difficulty: "Easy", inStock: true },
  { id: "15", name: "Board Game", category: "Games", difficulty: "Medium", inStock: false },
  { id: "16", name: "Strategy Game", category: "Games", difficulty: "Hard", inStock: true },
  
  // Crafts
  { id: "17", name: "Paint Set", category: "Crafts", difficulty: "Easy", inStock: true },
  { id: "18", name: "Clay Kit", category: "Crafts", difficulty: "Medium", inStock: true },
  { id: "19", name: "Jewelry Making", category: "Crafts", difficulty: "Hard", inStock: false },
  { id: "20", name: "Origami Paper", category: "Crafts", difficulty: "Medium", inStock: true }
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