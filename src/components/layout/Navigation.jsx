import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return (
        <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/toys">Toys</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/elves">Elves</NavLink>
        </nav>
    )
}