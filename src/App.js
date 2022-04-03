import "./App.css";
import React, { useState } from "react";
import AppBar from "./components/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import { auth } from "./Firebase-config";
import { signOut } from "firebase/auth";
import Footer from "./components/Footer";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  function signUserOut() {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
    });
  }

  return (
    <Router>
      <AppBar isAuth={isAuth} signUserOut={signUserOut} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
