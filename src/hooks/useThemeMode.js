import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useThemeMode() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
    }, [theme]);

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return [theme, toggle];
}