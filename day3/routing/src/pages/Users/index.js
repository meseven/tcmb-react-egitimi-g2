import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Kullanıcılar</h2>

      <UserList users={users} />
    </div>
  );
}

export default Users;
