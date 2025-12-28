import { useMemo, useState } from "react";
import ToyFilters from "../components/toys/ToyFilters";
import ToysList from "../components/toys/ToysList";

const MOCK_TOYS = [
  { id: "t1", name: "Wooden Train", category: "Vehicles", difficulty: "Easy", inStock: true },
  { id: "t2", name: "Robot Buddy", category: "Electronics", difficulty: "Hard", inStock: false },
  { id: "t3", name: "Doll House", category: "Classic", difficulty: "Medium", inStock: true },
  { id: "t4", name: "Puzzle Set", category: "Games", difficulty: "Easy", inStock: true },
  { id: "t5", name: "RC Sleigh", category: "Vehicles", difficulty: "Hard", inStock: true },
];

const difficultyRank = { Easy: 1, Medium: 2, Hard: 3 };

export default function ToysPage() {
  const [filters, setFilters] = useState({ category: "all", inStockOnly: false });
  const [sort, setSort] = useState("name-asc");

  const categories = useMemo(() => {
    return Array.from(new Set(MOCK_TOYS.map((t) => t.category))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);

  const visibleToys = useMemo(() => {
    
    let list = MOCK_TOYS;

    if (filters.category !== "all") {
      list = list.filter((t) => t.category === filters.category);
    }
    if (filters.inStockOnly) {
      list = list.filter((t) => t.inStock);
    }

    
    const sorted = [...list];
    switch (sort) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "difficulty-asc":
        sorted.sort((a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]);
        break;
      case "difficulty-desc":
        sorted.sort((a, b) => difficultyRank[b.difficulty] - difficultyRank[a.difficulty]);
        break;
      default:
        break;
    }

    return sorted;
  }, [filters, sort]);

  return (
    <div className="page">
      <h2>Toys</h2>

      <ToyFilters
        categories={categories}
        filters={filters}
        onChange={setFilters}
        sort={sort}
        onSortChange={setSort}
      />

      <ToysList toys={visibleToys} />
    </div>
  );
}
