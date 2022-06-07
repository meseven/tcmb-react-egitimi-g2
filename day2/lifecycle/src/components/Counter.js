import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {});
  useEffect(() => {
    // mount
    return () => {}; // unmount
  }, []);
  useEffect(() => {}, [count]);
  useEffect(() => {}, [amount]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval çalıştı.");
      setCount((prev) => prev + 1); // setCount(1)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      {/* <h1>{amount}</h1>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button> */}
    </div>
  );
}

export default Counter;
