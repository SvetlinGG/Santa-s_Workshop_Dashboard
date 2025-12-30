
let mockToys = [
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

let mockOrders = [
  { id: "1", status: "pending", childName: "Alice", country: "USA" },
  { id: "2", status: "completed", childName: "Bob", country: "Canada" },
  { id: "3", status: "pending", childName: "Charlie", country: "UK" }
];

let mockElves = [
  { id: "1", name: "Buddy", isActive: true, department: "Toy Making", experience: "5 years" },
  { id: "2", name: "Jingle", isActive: false, department: "Gift Wrapping", experience: "3 years" },
  { id: "3", name: "Holly", isActive: true, department: "Quality Control", experience: "7 years" },
  { id: "4", name: "Snowball", isActive: true, department: "Logistics", experience: "2 years" }
];

export async function request(method, url, body) {
    // Add small delay to simulate network
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (method === "GET" && url === "/toys") return [...mockToys];
    if (method === "GET" && url === "/orders") return [...mockOrders];
    if (method === "GET" && url === "/elves") return [...mockElves];
    if (method === "GET" && url.startsWith("/toys/")) {
        const id = url.split("/")[2];
        return mockToys.find(t => t.id === id) || null;
    }
    if (method === "GET" && url.startsWith("/elves/")) {
        const id = url.split("/")[2];
        return mockElves.find(e => e.id === id) || null;
    }
    
    // Handle order creation
    if (method === "POST" && url === "/orders") {
        const newOrder = {
            id: String(mockOrders.length + 1),
            ...body,
            status: "pending"
        };
        mockOrders.push(newOrder);
        return newOrder;
    }
    
    // Handle toy stock toggle
    if (method === "PATCH" && url.startsWith("/toys/")) {
        const id = url.split("/")[2];
        const toy = mockToys.find(t => t.id === id);
        if (toy && body.hasOwnProperty('inStock')) {
            toy.inStock = body.inStock;
            return toy;
        }
    }
    
    // Original fetch logic 
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