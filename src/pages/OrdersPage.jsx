import { Link } from "react-router-dom";

export default function OrdersPage(){

    return (
        <div className="page">
            <h2>Orders</h2>
            <Link to="/orders/new">Create Orders</Link>
        </div>
    );

}