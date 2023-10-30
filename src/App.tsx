import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import "./styles/RouteStyle/NavBar.css";
import Footer from "./components/Footer";
import AnimatedRoutes from "./styles/RouteStyle/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
