import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import ChangeTheme from "./ChangeTheme";
import Footer from "./Footer";

function Container() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <ChangeTheme />
      <Footer />
    </div>
  );
}

export default Container;
