import { useParams } from "react-router-dom";

export default function ToyDetailsPage(){

    const { toyId } = useParams();

    return (

        <div className="page">
            <h2>Toy Details</h2>
            <p>Toy ID: {toyId}</p>
            <p>Coming next: details + optimistic toggle stock.</p>
        </div>
    )
}