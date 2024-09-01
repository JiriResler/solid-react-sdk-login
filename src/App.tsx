import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useSession } from "@inrupt/solid-ui-react";
import Profile from "./Profile";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

function App() {
  const { session } = useSession();

  if (session.info.isLoggedIn) {
    return <Profile />;
  }

  return <Login />;

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<h1>No Match Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
