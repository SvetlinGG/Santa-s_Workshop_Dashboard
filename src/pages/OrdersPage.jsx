import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ordersApi } from "../api/orders.api";

import Loader from "../components/common/Loader";
import ErrorFallback from "../components/common/ErrorFallback";
import OrdersTabs from "../components/orders/OrdersTabs";
import OrdersList from "../components/orders/OrdersList";

export default function OrdersPage(){
    const [activeTab, setActiveTab] = useState("All");

    const { data: orders = [], isLoading, isError, error } = useQuery({
        queryKey: ["orders"],
        queryFn: ordersApi.getAll,
    });

    const visibleOrders = useMemo(() => {
        if (activeTab === "All") return orders;

        const tabLower = activeTab.toLowerCase();
        return orders.filter((o) => String(o.status).toLowerCase() === tabLower);
    }, [orders, activeTab]);

    if (isLoading) return <Loader text="Loading orders..." />;
    if (isError) return <ErrorFallback title="Failed to load orders" error={error} />;

    return (
        <div className="page">
            <div className="page-head">
                <h2>Orders</h2>
                <Link className="btn" to="/orders/new">
                + New Order
                </Link>
            </div>
            <OrdersTabs active={activeTab} onChange={setActiveTab} />
            <OrdersList orders={visibleOrders} />
        </div>
    );
}