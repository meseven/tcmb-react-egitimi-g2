import React from "react";
import { useTheme } from "../context/ThemeContext";

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      ChangeTheme
      <div>Active Theme: {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default ChangeTheme;
