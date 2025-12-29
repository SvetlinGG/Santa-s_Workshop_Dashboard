import { useQuery }  from "@tanstack/react-query";
import { elvesApi } from "../api/elves.api";

import Loader from '../components/common/Loader';
import ErrorFallback from '../components/common/ErrorFallback';
import ElvesList from '../components/elves/ElvesList';


export default function ElvesPage(){

    const { data: elves = [], isLoading, isError, error } = useQuery({
        queryKey: ['elves'],
        queryFn: elvesApi.getAll,
    });

    if ( isLoading ) return <Loader text="Loading elves..." />
    if ( isError ) return <ErrorFallback title="Failed to load elves" error={error} />

    return (
        <div className="page">
            <h2>Elves</h2>
            <ElvesList elves={elves} />
        </div>
    );
}