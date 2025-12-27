export default function ToyFilters({
    categories = [],
    filters,
    onChange,
    sort,
    onSortChange,
}) {
    return (
        <section className="panel">
            <h3>Filters</h3>

            <div className="controls">
                <label className="control">
                    <span>Category</span>
                    <select 
                        value={filters.category}
                        onChange={(e) => onChange({...filters, category: e.target.value})}
                    >
                        <option value="all">All</option>
                        {categories.map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="control checkbox">
                    <input
                        type="checkbox"
                        checked={filters.inStockOnly}
                        onChange={(e) => 
                            onChange({...filters, inStockOnly: e.target.checked})
                        }
                        />
                        <span>In stock only</span>
                </label>

                <label className="control">
                    <span>Sort by</span>
                    <select
                    value={sort}
                    onChange={(e)=> onSortChange(e.target.value)}
                    >
                        <option value="name-asc">Name (A → Z)</option>
                        <option value="name-desc">Name (Z → A)</option>
                        <option value="difficulty-asc">Difficulty (Easy → Hard)</option>
                        <option value="difficulty-desc">Difficulty (Hard → Easy)</option>

                    </select>
                </label>
            </div>
        </section>
    );
}