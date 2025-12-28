
 export default function Loader({ text = "Loading..."}){
    return (
        <div className="panel">
            <p className="muted">{text}</p>
        </div>
    );
 }