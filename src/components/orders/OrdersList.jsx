import OrderItem from "./OrderItem"
export default function OrdersList({orders}){
    if (!orders.length){
        return (
            <section className="panel">
                <h3>Orders</h3>
                <p className="muted">No orders match this status.</p>
            </section>
        );
    }

    return (
        <section className="panel">
            <h3>Orders</h3>

            <div className="table-wrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{width: "90px"}}>ID</th>
                            <th>Child Name</th>
                            <th>Country</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o) => {
                            <OrderItem key={o.id} order={o} />
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}