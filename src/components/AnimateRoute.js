import React from "react";
import { Intro } from "./intro/Intro";
import { AboutRoute } from "./routes/AboutRoute";
import { GoldenRoute } from "./routes/GoldenRoute";
import { ContactRoute } from "./routes/ContactRoute";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const AnimateRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/golden" element={<GoldenRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </AnimatePresence>
  );
};
