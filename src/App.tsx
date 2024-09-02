import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Login from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>No Match Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
