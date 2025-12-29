import { Link } from "react-router-dom";

export default function ElfItem({ elf }){
    return (
        <tr>
            <td>
                <Link to={`/elves/${elf.id}`} className="link">
                 {elf.name}
                </Link>
            </td>
            <td>{elf.role}</td>
            <td>
                <div className="energy">
                    <div className="energy-bar" style={{ width: `${Number(elf.energy) || 0}%` }} />
                </div>
                <span className="mono">{elf.energy}</span>
            </td>
        </tr>
    );
}