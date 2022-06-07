import React from "react";

function ViewData({ count, increase }) {
  return (
    <div>
      ViewData
      <br />
      <strong>Count: {count}</strong>
      <br />
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default ViewData;
