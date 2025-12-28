import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { toysApi } from "../api/toys.api";
import Loader from '../components/common/Loader';
import ErrorFallback from '../components/common/ErrorFallback';
import ToyDetails from '../components/toys/ToyDetails';


export default function ToyDetailsPage(){

    const { toyId } = useParams();
    const queryClient = useQueryClient();

    const {
        data: toy,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["toys", toyId],
        queryFn: () => toysApi.getById(toyId),
    });

    const toggleMutation = useMutation({
        mutationFn: async ({id, nextInStock}) => {
            return toysApi.toggleStock(id, nextInStock);
        },

        onMutate: async ({ id, nextInStock}) => {
            await queryClient.cancelQueries({ queryKey: ["toys"]});
            await queryClient.cancelQueries({ queryKey: ["toys", id]});

            const prevToy = queryClient.getQueryData(["toys", id]);
            const prevToysList = queryClient.getQueryData(["toys"]);

            queryClient.setQueryData(["toys", id], (old) => {
                if(!old) return old;
                return {...old, inStock: nextInStock};
            });

            queryClient.setQueryData(["toys"], (old) => {
                if(!old) return old;
                return old.map(toy => 
                    toy.id === id ? {...toy, inStock: nextInStock} : toy
                );
            });
            return { prevToy, prevToysList};
        },

        onError: (err, vars, ctx) => {
            if (ctx?.prevToy) queryClient.setQueryData(["toys", vars.id], ctx.prevToy);
            if (ctx?.prevToysList) queryClient.setQueryData(["toys"], ctx.prevToysList);
        },

        onSettled: (_data, _err, vars) => {
            queryClient.invalidateQueries({ queryKey: ["toys"] });
            queryClient.invalidateQueries({ queryKey: ["toys", vars.id] });
        },
    });


    if (isLoading) return <Loader text="Loading toy details..." />
    if (isError) return <ErrorFallback title="Failed to load toy" error={error} />
    if ( !toy) return <ErrorFallback title="Toy not found" error={{ message: "No data"}} />

    function handleToggleStock(){
        const nextInStock = !toy.inStock;
        toggleMutation.mutate({ id: toy.id, nextInStock});
    }

    return (

        <div className="page">
            <div style={{ marginBottom: "0.75rem"}} >
                <Link to="/toys" className="link">
                ← Back to Toys
                </Link>
            </div>
            <h2>Toy Details</h2>
            <ToyDetails
                toy={toy}
                onToggleStock={handleToggleStock}
                isToggling={toggleMutation.isPending} 
                />
        </div>
    );
}