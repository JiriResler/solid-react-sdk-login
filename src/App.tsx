import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { useSession } from "@inrupt/solid-ui-react";
// import Home from "./Home";
// import Login from "./Login";

function App() {
  // const { session } = useSession();

  // if (session.info.isLoggedIn) {
  //   return <Home />
  // }

  // return <Login />

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/info' element={<InfoPage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='*' element={<h1>No Match Page</h1>} />
    </Routes>
    </>
  )
}

function LandingPage() {
  return (
    <h1>Landing Page</h1>
  )
}

function InfoPage() {
  return (
    <h1>Info Page</h1>
  )
}

function SettingsPage() {
  return (
    <h1>Settings Page</h1>
  )
}

export default App;
