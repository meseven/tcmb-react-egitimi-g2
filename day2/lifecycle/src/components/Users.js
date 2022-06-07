import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
    //     ).then((res) => {
    //       setPosts(res.data);
    //     });
    //   })
    //   .catch((e) => console.log("error", e))
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  const getData = async () => {
    const { data: user_list } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(user_list);
    setLoading(false);

    const { data: post_list } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_list[0].id}`
    );

    setPosts(post_list);
  };

  return (
    <div>
      <h1>Users</h1>
      {loading && <Loading />}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <h1>{users[0]?.name}'s Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default Users;
