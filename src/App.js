import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { AnimateRoute } from "./components/AnimateRoute";

export const App = () => {

  return (
    <div className="app">
      <Navbar />
      <AnimateRoute />
  
    </div>
  );
};
