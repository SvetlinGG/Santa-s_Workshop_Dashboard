import { Link } from "react-router-dom";

export default function NotFoundPage(){

    return (
        <div className="page">
            <h2>404 - Not Found</h2>
            <p>
                Go Back to <Link to="/">Home</Link>
            </p>
        </div>
    );
}