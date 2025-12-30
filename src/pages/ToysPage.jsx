


import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toysApi } from "../api/toys.api";
import ToyFilters from "../components/toys/ToyFilters";
import ToysList from "../components/toys/ToysList";
import Loader from "../components/common/Loader";
import ErrorFallback from "../components/common/ErrorFallback";
import Pagination from "../components/common/Pagination";

const difficultyRank = { Easy: 1, Medium: 2, Hard: 3 };

export default function ToysPage() {
  const [filters, setFilters] = useState({ category: "all", inStockOnly: false });
  const [sort, setSort] = useState("name-asc");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const {
    data: toys = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["toys"],
    queryFn: toysApi.getAll,
  });

  const categories = useMemo(() => {
    return Array.from(new Set(toys.map((t) => t.category))).sort((a, b) =>
      a.localeCompare(b)
    );
  }, [toys]);

  const visibleToys = useMemo(() => {
    let list = toys;

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
        sorted.sort(
          (a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty]
        );
        break;
      case "difficulty-desc":
        sorted.sort(
          (a, b) => difficultyRank[b.difficulty] - difficultyRank[a.difficulty]
        );
        break;
      default:
        break;
    }

    return sorted;
  }, [toys, filters, sort]);

  const total = visibleToys.length;
  const pagedToys = useMemo(() => {
    const start = (page - 1) * pageSize;
    return visibleToys.slice(start, start + pageSize);
  }, [visibleToys, page]);

  useEffect(() => setPage(1), [filters, sort]);

  if (isLoading) return <Loader text="Loading toys..." />;
  if (isError) return <ErrorFallback title="Failed to load toys" error={error} />;

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
      <ToysList toys={pagedToys} />
      <Pagination page={page} pageSize={pageSize} total={total} onPageChange={setPage} />
    </div>
  );
}
