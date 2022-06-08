import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="auth-menu">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/forget-password">Forget Password</Link>
    </div>
  );
}

export default Menu;
