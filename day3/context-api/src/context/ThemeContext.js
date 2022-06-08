import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem("theme") || "dark";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme hook must be call inside ThemeContextProvider");
  }

  return context;
};

export default ThemeContext;
