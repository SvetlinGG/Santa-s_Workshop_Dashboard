import { NavLink, Route, Routes, useParams } from "react-router-dom";

function TasksPlaceholder(){
    return <p>Coming next: tasks list (nested route)</p>
}

export default function ElfProfilePage(){
    const { elfId } = useParams();

    return (
        <div className="page">
            <h2>Elf Profile</h2>
            <p>Elf ID: {elfId}</p>
            <div style={{ display: 'flex', gap: '0.75rem', margin: '0.75rem 0'}}>
                <NavLink to="" end>Profile</NavLink>
                <NavLink to="tasks">Tasks</NavLink>
            </div>

            <Routes>
                <Route index element={<p>Coming next: profile + boost energy button.</p>} />
                <Route path="tasks" element={<TasksPlaceholder />} />
            </Routes>
        </div>
    )
}