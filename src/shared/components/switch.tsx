import { useTheme } from "../layout";

export const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 cursor-pointer select-none" onClick={toggleTheme}>
      <div className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center px-1 transition">
        <div
          className={`h-5 w-5 bg-white rounded-full transform transition-transform ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
        <span
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-sm"
          role="img"
          aria-label="theme emoji"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </div>
  );
};
