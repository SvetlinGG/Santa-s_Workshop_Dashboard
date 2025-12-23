
export default function StatusCards({
    totalToys = 0,
    pendingOrders = 0,
    activeElves = 0,
}) {
    return (
        <section className="status-cards">
            <article className="card">
                <h3>Total Toys</h3>
                <p className="value">{totalToys}</p>
            </article>

            <article className="card">
                <h3>Pending Order</h3>
                <p className="value">{pendingOrders}</p>
            </article>

            <article className="card">
                <h3>Active Elves</h3>
                <p className="value">{activeElves}</p>
            </article>

        </section>
    );
}