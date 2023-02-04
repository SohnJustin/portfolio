import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Experiences from "../../components/pagelayout/Experience";
import Home from "../../components/pagelayout/Home";
import Projects from "../../components/pagelayout/Projects";
import Contacts from "../../components/pagelayout/Contacts";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experiences />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
