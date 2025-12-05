import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Suggestions from "./pages/Suggestions";
import SavedRecipes from "./pages/SavedRecipes";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/saved" element={<SavedRecipes />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Reduce waste, cook smarter.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
