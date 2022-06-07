import React, { useState } from "react";

// batch update

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  // const [name, setName] = useState("Ahmet");
  // const [randomNumber, setRandomNumber] = useState(0);

  const increase = () => {
    // count + 1
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
      <hr />

      <h2>{amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
      <hr />

      {/* <h3>{name}</h3>
      <button onClick={() => setName("Mehmet")}>Change Name</button>
      <hr />

      <h3>Random Number</h3>
      <h3>{randomNumber}</h3>
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}>
        Generate Number
      </button> */}
    </>
  );
}

export default Counter;
