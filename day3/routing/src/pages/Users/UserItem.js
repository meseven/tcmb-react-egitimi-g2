import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <div>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </div>
  );
}

export default UserItem;
