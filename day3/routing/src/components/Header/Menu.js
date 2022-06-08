import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link to="/">Anasayfa</Link>
          <Link to="/users">Kullanıcılar</Link>
          <Link to="/contact">İletişim</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
