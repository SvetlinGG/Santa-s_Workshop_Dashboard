import ToyItem from "./ToyItem";
export default function ToysList({ toys }){
    if (!toys.length){
        return (
            <section className="panel">
                <h3>Toys</h3>
                <p className="muted">No toys match your filters.</p>
            </section>
        );
    }

    return (
        <section className="panel">
            <h3>Toys</h3>

            <div className="table-wrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: "90px"}} >ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Difficulty</th>
                            <th>Stock</th>
                        </tr>
                    </thead>

                    <tbody>
                        {toys.map((t) => (
                            <ToyItem key={t.id} toy={t} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}