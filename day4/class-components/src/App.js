// import Counter from "./components/Counter";
// import CounterClass from "./components/CounterClass";
import { useState } from "react";
import Users from "./components/Users";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      {/* <Counter /> */}
      {/* <CounterClass initial={0} title="Hello" subTitle="Hello World" /> */}

      {isVisible && <Users />}

      <button onClick={() => setIsVisible((prev) => !prev)}>Toggle</button>
    </div>
  );
}

export default App;
