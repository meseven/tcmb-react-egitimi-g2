import React from "react";
import "./styles.css";

function Login() {
  return (
    <div className="login">
      <h2>Giriş Yap</h2>

      <div>
        <label htmlFor="email">E-mail</label>
        <input name="email" />
      </div>
      <div>
        <label htmlFor="password">Parola</label>
        <input name="password" />
      </div>
      <div>
        <button>Giriş Yap</button>
      </div>
    </div>
  );
}

export default Login;
