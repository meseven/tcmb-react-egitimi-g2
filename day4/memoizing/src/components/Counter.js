import React, { useState, useMemo, useCallback } from "react";
import Header from "./Header";
import User from "./User";
// import Footer from "./Footer";

function Counter() {
  console.log("Counter re-render");

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);
  const [amount, setAmount] = useState(1);
  // const [length, setLength] = useState(0);

  const data = useMemo(() => {
    return {
      id: 1,
      username: "mseven",
      age,
    };
  }, [age]);

  const increase = useCallback(() => {
    setCount((prev) => prev + amount);
  }, [amount]);

  return (
    <div>
      <Header increase={increase} />

      <h1>Count: {count}</h1>
      <button onClick={increase}>Arttır</button>

      <hr />

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>

      <hr />
      <h2>Age: {age}</h2>
      <button onClick={() => setAge(10)}>10</button>
      <button onClick={() => setAge(20)}>20</button>
      <button onClick={() => setAge(30)}>30</button>

      <User data={data} />

      {/* <h3>Length: {length}</h3>
      <button onClick={() => setLength(1)}>1</button>
      <button onClick={() => setLength(5)}>5</button>
      <button onClick={() => setLength(10)}>10</button>

      <Footer length={length} /> */}
    </div>
  );
}

export default Counter;
