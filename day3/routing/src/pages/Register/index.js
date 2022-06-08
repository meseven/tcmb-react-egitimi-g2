import React from "react";

function Register() {
  return (
    <div className="login">
      <h2>Kayıt Ol</h2>

      <div>
        <label htmlFor="email">E-mail</label>
        <input name="email" />
      </div>
      <div>
        <label htmlFor="password">Parola</label>
        <input name="password" />
      </div>
      <div>
        <label htmlFor="password">Parolayı Onaylayın</label>
        <input name="password" />
      </div>
      <div>
        <button>Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Register;
