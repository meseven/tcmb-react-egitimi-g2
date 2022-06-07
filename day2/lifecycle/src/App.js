import "./App.css";
import Users from "./components/Users";
// import Counter from "./components/Counter";
// import RandomNumbers from "./components/RandomNumbers";

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* {isVisible && <Counter />}

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Gizle" : "Göster"}
      </button> */}

      {/* <RandomNumbers /> */}

      <Users />
    </div>
  );
}

export default App;
