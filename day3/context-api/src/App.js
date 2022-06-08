import Container from "./components/Container";
import Settings from "./components/Settings";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Container />
      <Settings />
    </ThemeContextProvider>
  );
}

export default App;
