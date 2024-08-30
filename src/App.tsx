import "./App.css";
import { useSession } from "@inrupt/solid-ui-react";
import Home from "./Home";
import Login from "./Login";

function App() {
  const { session } = useSession();

  if (session.info.isLoggedIn) {
    return <Home />
  }

  return <Login />
}

export default App;
