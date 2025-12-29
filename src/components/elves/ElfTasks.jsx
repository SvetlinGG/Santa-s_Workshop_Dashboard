
export default function ElfTasks({ tasks = [] }){

    return (
        <section className="panel">
            <h3>Tasks</h3>

            {tasks.length ? (
                <ul className="tasks">
                    {tasks.map((t, idx) => (
                        <li key={t.id ?? idx} className="task">
                            {t.title ?? String(t)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="muted">No tasks assigned.</p>
            )}
        </section>
    );
}