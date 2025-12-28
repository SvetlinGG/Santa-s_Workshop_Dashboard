
export default function OrderItem({ order }){
    return (
        <tr>
            <td className="mono">{order.id}</td>
            <td>{order.child}</td>
            <td>{order.country}</td>
            <td>
                <span className={`pill ${String(order.status).toLowerCase()}`}>
                    {order.status}
                </span>
            </td>
        </tr>
    );
}