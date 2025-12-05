import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const lastIngredients = localStorage.getItem("lastSearch");

  const goBackToResults = () => {
    navigate("/suggestions", {
      state: { ingredients: lastIngredients }
    });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Pantrymate</Link>

      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/saved">Saved</Link>
        <Link to="/contact">Contact</Link>

        {lastIngredients && (
          <button className="back-btn" onClick={goBackToResults}>
            Back to Results
          </button>
        )}
      </div>
    </nav>
  );
}
