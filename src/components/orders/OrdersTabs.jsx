
const TABS = ["All", "Pending", "Packed", "Shipped"];

export default function OrdersTabs({active, onChange}){
    return (
        <div className="tabs" role="tablist" aria-label="Order status tabs" >
            {TABS.map((t) => (
                <button
                    key={t}
                    type="button"
                    className={`tab ${active === t ? "active" :""}`}
                    onClick={() => onChange(t)}
                    role="tab"
                    aria-selected={active === t}
                >
                    {t}</button>
            ))}
        </div>
    );
}