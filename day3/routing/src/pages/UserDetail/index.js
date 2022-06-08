import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <br />
      <Link to={`/users/${Number(id) + 1}`}>Sonraki</Link>
    </div>
  );
}

export default UserDetail;
