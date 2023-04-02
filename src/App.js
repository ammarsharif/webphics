import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import SignIn from "./components/SignIn/SignIn";
import Test from "./components/Test/Test";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
