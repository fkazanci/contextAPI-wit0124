import "./App.css";
import { UserContextProvider } from "./contexts/UserContext";
import Header from "./components/Header";
import Main from "./components/Main";
import { BasketContextProvider } from "./contexts/BasketContext";

function App() {
  return (
    <UserContextProvider>
      <BasketContextProvider>
        <Header />
        <Main />
      </BasketContextProvider>
    </UserContextProvider>
  );
}

export default App;
