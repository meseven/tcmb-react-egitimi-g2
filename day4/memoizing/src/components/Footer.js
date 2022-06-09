import React from "react";

function Footer({ length }) {
  console.log("Footer re-render");

  const numbers = new Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * 100));

  return (
    <div>
      <hr />
      Footer
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
    </div>
  );
}

export default React.memo(Footer);
