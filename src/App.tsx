import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

function App() {
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
