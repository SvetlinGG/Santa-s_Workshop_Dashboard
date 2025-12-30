import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useThemeMode(){
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    function toggle(){
        setTheme((t) => (t === "light" ? "dark" : "light"));
    }

    return { theme, toggle, setTheme };
}