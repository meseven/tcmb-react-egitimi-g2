import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import "./styles.css";

function AuthLayout() {
  return (
    <div className="auth-layout-container">
      <div>
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
