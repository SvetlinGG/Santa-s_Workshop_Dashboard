import ToyCard from "./ToyCard";

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
        <section className="toys-grid">
            {toys.map((toy) => (
                <ToyCard key={toy.id} toy={toy} />
            ))}
        </section>
    );
}