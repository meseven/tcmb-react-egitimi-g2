import React from "react";
import axios from "axios";
import UserList from "./UserList";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      this.setState({ users: res.data })
    );
  }

  componentWillUnmount() {
    console.log("Component unmount");
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default Users;
