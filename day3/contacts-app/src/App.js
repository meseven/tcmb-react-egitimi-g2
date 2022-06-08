import Form from "./components/Form";
import List from "./components/List";
import { ContactContextProvider } from "./context/ContactContext";

function App() {
  return (
    <ContactContextProvider>
      <Form />
      <List />
    </ContactContextProvider>
  );
}

export default App;
