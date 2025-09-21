import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Homepage from "./pages/Homepage";
import FeaturesPage from "./pages/FeaturesPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";


function App() {
  
  return (
    <div className="w[100]% h-[100%] box-border">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path='/features' element={<FeaturesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;