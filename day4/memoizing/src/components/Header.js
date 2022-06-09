import React from "react";

function Header({ increase }) {
  console.log("Header re-render");
  return (
    <div>
      Header <br />
      <button onClick={increase}>Arttır</button>
      <hr />
    </div>
  );
}

export default React.memo(Header);
