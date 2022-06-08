import React from "react";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { theme } = useTheme();

  console.log(theme);

  return <div>Settings</div>;
}

export default Settings;
