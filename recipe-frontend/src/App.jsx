import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="w[100]% h-[100%] box-border">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
