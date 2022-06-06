import React from "react";
import PropTypes from "prop-types";

const User = ({
  title,
  name,
  age,
  isAdmin,
  location,
  friends,
  handleClick,
}) => {
  return (
    <div className="user-item">
      <h3>{title}</h3>
      <div>{isAdmin && <div>ADMIN</div>}</div>
      <div>İsim: {name}</div>
      <div>Yaş: {age}</div>
      <div>
        {location.city},{location.country}, {location.zipCode}
      </div>

      <h3>Arkadaşları</h3>

      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

User.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  age: PropTypes.number,
  isAdmin: PropTypes.bool,
  location: PropTypes.exact({
    country: PropTypes.string,
    city: PropTypes.string,
    zipCode: PropTypes.number,
  }),
  friends: PropTypes.array,
  handleClick: PropTypes.func,
};

User.defaultProps = {
  title: "Kullanıcı",
};

export default User;
