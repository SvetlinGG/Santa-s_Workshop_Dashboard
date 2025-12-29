import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

import { elvesApi } from '../api/elves.api';

import Loader from '../components/common/Loader';
import ErrorFallback from '../components/common/ErrorFallback';

import ElfProfile from '../components/elves/ElfProfile';
import ElfTasks from '../components/elves/ElfTasks';




export default function ElfProfilePage(){
    const { elfId } = useParams();

    const { data: elf, isLoading, isError, error } = useQuery({
        queryKey: ["elves", elfId],
        queryFn: () => elvesApi.getById(elfId),
    });

    if (isLoading) return <Loader text="Loading elf profile..." />;
    if (isError) return <ErrorFallback title="Failed to load elf" error={error} />;
    if (!elf) return <ErrorFallback title="Elf not found" error={{ message: "no data"}} />;

    return (
        <div className="page">
            <div style={{ marginBottom: '0.75rem'}}>
                <Link to='/elves' className="link">
                ← Back to Elves
                </Link>
            </div>

            <h2>Elf</h2>

            <div className="tabs" style={{ marginTop: '0.5rem'}}>
                <NavLink className={({ isActive}) => `tab ${isActive ? 'active' : ''}`} to='end'>
                    Profile
                </NavLink>
                <NavLink className={({ isActive}) => `tab ${isActive ? 'active' : ''}`} to='tasks'>
                    Tasks
                </NavLink>
            </div>
            <Routes>
                <Route index element={<ElfProfile elf={elf} />} />
                <Route path="tasks" element={<ElfTasks tasks={elf.tasks || []} />} />
            </Routes>
        </div>
    )
}