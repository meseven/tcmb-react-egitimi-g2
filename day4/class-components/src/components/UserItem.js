import React from "react";

class UserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.user.name}</div>;
  }
}

export default UserItem;
