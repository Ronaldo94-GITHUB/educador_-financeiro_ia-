import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

export function ThemeToggle({ isDarkMode, onToggleTheme }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggleTheme}>
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      {isDarkMode ? "Modo claro" : "Modo escuro"}
    </button>
  );
}