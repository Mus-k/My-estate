import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Intro } from "./components/intro/Intro";
import { AboutRoute } from "./components/routes/AboutRoute";
import { GoldenRoute } from "./components/routes/GoldenRoute";
import { ContactRoute } from "./components/routes/ContactRoute";
import { Modern } from "./components/modern/Modern";
import { Slider } from "./components/slider/Slider";
import { Overview } from "./components/overview/Overview";
import { NewLetter } from "./components/newsletter/NewLetter";
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div className="app">
     
        <Navbar />
    

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/golden" element={<GoldenRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
      <Modern />
      <Slider />
      <Overview />
      <NewLetter/>
      <Footer/>
    </div>
  );
};
