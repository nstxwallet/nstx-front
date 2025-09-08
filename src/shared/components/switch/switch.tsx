import { useTheme } from "@/shared/layout";
import "./Switch.css";

export const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="SwitchWrapper" onClick={toggleTheme}>
      <div className="SwitchTrack">
        <div className="SwitchThumb" />
        <span className="SwitchIcon" role="img" aria-label="theme emoji">
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </div>
    </div>
  );
};
