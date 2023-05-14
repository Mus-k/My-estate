import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

import { AnimateRoute } from "./components/AnimateRoute";

export const App = () => {

  return (
    <div className="app">
      <Navbar />

      <AnimateRoute />
      {/* <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/golden" element={<GoldenRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes> */}
    </div>
  );
};
