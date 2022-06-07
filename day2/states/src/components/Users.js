import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const names = ["Mehmet", "Fatma", "Berkay", "Semih"];

function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Fatma",
    },
    {
      id: 2,
      name: "Berkay",
    },
  ]);

  const handleAdd = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setUsers((prev) => [...prev, { id: uuidv4(), name: randomName }]);
  };

  const handleRemove = (id) => {
    const newData = [...users];
    const index = newData.findIndex((item) => item.id === id);
    newData.splice(index, 1);
    setUsers(newData);
  };

  const removeAll = () => {
    setUsers([]);
  };

  return (
    <div>
      <h2>Users</h2>

      {users.length < 1 ? (
        <div>Henüz bir kullanıcı yok </div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            {user.name}{" "}
            <span className="remove" onClick={() => handleRemove(user.id)}>
              x
            </span>
          </div>
        ))
      )}

      <br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
}

export default Users;

// Kullanıcı bilgilerini içeren bir array state tanımlayalım.
// Kullanıcıları listeleyelim.
// Yeni bir kullanıcı ekleyelim.
// Bir kullanıcıyı listeden kaldıralım.
