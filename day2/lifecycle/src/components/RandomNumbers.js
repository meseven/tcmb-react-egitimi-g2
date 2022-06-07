import React, { useEffect, useState } from "react";

function RandomNumbers() {
  const [length, setLength] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const randomNumbers = new Array(length)
      .fill()
      .map(() => Math.ceil(Math.random() * limit));

    setNumbers(randomNumbers);
  }, [length, limit]);

  return (
    <div>
      <h2>Numbers</h2>
      {numbers.map((number, i) => (
        <div key={i}>{number}</div>
      ))}

      <hr />

      <h1>Length ({length})</h1>
      <button onClick={() => setLength(1)}>1</button>
      <button onClick={() => setLength(5)}>5</button>
      <button onClick={() => setLength(10)}>10</button>

      <hr />
      <h1>Limit ({limit})</h1>
      <button onClick={() => setLimit(10)}>10</button>
      <button onClick={() => setLimit(20)}>20</button>
      <button onClick={() => setLimit(100)}>100</button>
    </div>
  );
}

export default RandomNumbers;
