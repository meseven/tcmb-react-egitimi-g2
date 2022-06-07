import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({ id: 1, name: "Fatih", city: "Istanbul" });

  const handleClick = () => {
    setUser((prev) => ({
      ...prev,
      id: 2,
      name: "Murat",
    }));
  };

  return (
    <div>
      <h2>User</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default User;
