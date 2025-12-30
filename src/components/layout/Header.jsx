import Navigation from './Navigation';
import Countdown from '../common/Countdown';
import { useThemeMode } from "../../hooks/useThemeMode";

export default function Header(){
    const [theme, toggle] = useThemeMode();
    
    return (
        <header className="header">
            <div className="header-row">
                <h1>🎅 Santa's Workshop Dashboard</h1>
                <div className="header-actions">
                    <Countdown />
                    <button className="btn" onClick={toggle}>
                        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                    </button>
                </div>
            </div>
            <Navigation />
        </header>
    );
}