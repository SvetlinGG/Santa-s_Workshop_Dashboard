import { useLocalStorage } from "./useLocalStorage";

export function useThemeMode() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    return [theme, toggle];
}