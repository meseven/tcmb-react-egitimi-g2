import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <hr />
      <div>Active Theme: {theme}</div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Footer;
