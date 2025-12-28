
export default function ErrorFallback({ title = "Something went wrong", error}){
    return (
        <div className="panel">
            <h3>{title}</h3>
            <p className="muted">{error?.message || "Unknown error"}</p>
        </div>
    );
}