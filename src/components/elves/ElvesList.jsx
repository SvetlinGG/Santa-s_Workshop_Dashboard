import ElfItem from "./ElfItem"

export default function ElvesList({ elves }){
    if (!elves.length){
        return (
            <section className="panel">
                <h3>Elves</h3>
                <p className="muted">No elves found.</p>
            </section>
        );
    }

    return (
        <section className="panel">
            <h3>Elves</h3>

            <div className="table-wrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Energy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elves.map((e) => (
                            <ElfItem key={e.id} elf={e} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}