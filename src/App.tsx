import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
