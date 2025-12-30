import StatusCards from "../components/home/StatusCards";
import NoticeBoard from "../components/home/NoticeBoard";
import Loader from "../components/common/Loader";
import ErrorFallback from "../components/common/ErrorFallback";
import { useQuery } from "@tanstack/react-query";

import { toysApi } from "../api/toys.api";
import { ordersApi } from "../api/orders.api";
import { elvesApi } from "../api/elves.api";
import { useMemo } from "react";


export default function HomePage(){
    const toysQuery = useQuery({
        queryKey: ["toys"],
        queryFn: toysApi.getAll,
    });

    const ordersQuery = useQuery({
        queryKey: ["orders"],
        queryFn: ordersApi.getAll,
    });

    const elvesQuery = useQuery({
        queryKey: ["elves"],
        queryFn: elvesApi.getAll,
    });

    if (toysQuery.isLoading || ordersQuery.isLoading || elvesQuery.isLoading){
        return (
            <div className="page">
                <h2>Home</h2>
                <Loader text="Loading workshop status..." />
                <NoticeBoard />
            </div>
        );
    }

    if ( toysQuery.isError || ordersQuery.isError || elvesQuery.isError){
        const err = 
        toysQuery.error || ordersQuery.error || elvesQuery.error || new Error("Failed");

        return (
            <div className="page">
                <h2>Home</h2>
                <ErrorFallback title="Failed to load workshop status" error={err} />
                <NoticeBoard />
            </div>
        );
    }

    const toys = toysQuery.data || [];
    const orders = ordersQuery.data || [];
    const elves = elvesQuery.data || [];

    const stats = useMemo(() => {
        const totalToys = toys.length;

        const pendingOrders = orders.filter(
            (o) => String(o.status).toLowerCase() === "pending"
        ).length;

        const activeElves = elves.filter(e => e.isActive).length;

        return { totalToys, pendingOrders, activeElves };
    }, [toys, orders, elves]);



    return (
        <div className="page">
            <h2>Home</h2>

            <StatusCards
                totalToys={stats.totalToys}
                pendingOrders={stats.pendingOrders}
                activeElves={stats.activeElves}
            />
            <NoticeBoard />
        </div>
    );
}