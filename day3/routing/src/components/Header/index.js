import React from "react";
import Menu from "./Menu";

function Header() {
  console.log("Header component re-render");
  return (
    <div>
      <Menu />
      <hr />
    </div>
  );
}

export default Header;
