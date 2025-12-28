import { Link } from "react-router-dom";


export default function ToyItem({ toy }){
    return (
        <tr>
            <td className="mono">{toy.id}</td>
            <td>
                <Link to={`/toys/${toy.id}`} className="link">
                {toy.name}
                </Link>
            </td>
            <td>{toy.category}</td>
            <td>
                <span className={`pill ${toy.difficulty.toLowerCase()}`}>
                    {toy.difficulty}
                    </span>
            </td>
            <td>
                <span className={toy.inStock ? "status ok" : "status bad"}>
                    {toy.inStock ? "In stock" : "Out of stock"}
                    </span>
            </td>
        </tr>
    );
}