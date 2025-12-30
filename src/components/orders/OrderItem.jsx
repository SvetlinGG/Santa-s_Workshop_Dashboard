
export default function OrderItem({ order }){
    return (
        <tr>
            <td className="mono" data-label="ID">{order.id}</td>
            <td data-label="Child Name">{order.childName}</td>
            <td data-label="Country">{order.country}</td>
            <td data-label="Status">
                <span className={`pill ${String(order.status).toLowerCase()}`}>
                    {order.status}
                </span>
            </td>
        </tr>
    );
}