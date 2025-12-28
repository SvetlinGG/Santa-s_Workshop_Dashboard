export default function ToyDetails({ toy, onToggleStock, isToggling}){

    return (
        <section className="panel">
            <div className="details-head">
                <div>
                    <h3>{toy.name}</h3>
                    <p className="muted">
                        ID: <span className="mono">{toy.id}</span>
                    </p>
                </div>

                <button 
                    className="btn"
                    onClick={onToggleStock}
                    disabled={isToggling}
                    aria-busy={isToggling}
                    >
                    {toy.inStock ? "Mark Out of Stock" : "Mark In Stock"}
                </button>
            </div>

            <div className="details-grid">
                <div className="details-row">
                    <span className="label">Category</span>
                    <span>{toy.category}</span>
                </div>

                <div className="details-row">
                    <span className="label">Difficulty</span>
                    <span className={`pill ${toy.difficulty.toLowerCase()}`}>
                        {toy.difficulty}
                    </span>
                </div>

                <div className="details-row">
                    <span className="label">Stock</span>
                    <span className={toy.inStock ? "status ok" : ":status bad"} >
                        {toy.inStock ? "In stock" : "Out of stock"}
                    </span>
                </div>
            </div>
        </section>
    );
}