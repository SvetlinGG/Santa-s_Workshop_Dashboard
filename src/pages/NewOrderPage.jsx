import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toysApi } from "../api/toys.api";
import { ordersApi } from "../api/orders.api";

import Loader from "../components/common/Loader";
import ErrorFallback from "../components/common/ErrorFallback";
import OrderForm from "../components/orders/OrderForm";

export default function NewOrderPage(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: toys = [], isLoading, isError, error } = useQuery({
        queryKey: ["toys"],
        queryFn: toysApi.getAll,
    });

    const createMutation = useMutation({
        mutationFn: (values) => {
            const payload = { ...values, status: "Pending"};
            return ordersApi.create(payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            navigate("/orders");
        },
    });

    if (isLoading) return <Loader text="Loading toys for order form..." />
    if (isError) return <ErrorFallback title="Failed to load toys" error={error} />



    return (
        <div className="page">
            <div style={{marginBottom: "0.75rem"}}>
                <Link to="/orders" className="link">
                ← Back to Orders
                </Link>
            </div>

            <OrderForm 
                toys={toys}
                onSubmit={(values) => createMutation.mutate(values)}
                isSubmitting={createMutation.isPending}
            />
            {createMutation.isError ? (
                <ErrorFallback 
                    title="Failed to create order"
                    error={createMutation.error} 
                />
            ) : null}

        </div>
    );
}