import React from "react";

export default function About() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: 20,
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
      }}
    >
      <h2>About Pantrymate</h2>

      <p>
        This app aims to help reduce food waste and save time by suggesting
        recipes based on the ingredients already avalable at home.
      </p>

      <p>
        It is built using Flask for the backend, React for the frontend, and the
        Spoonacular API for recipe data.
      </p>

      <p>
        Technology Stack: Flask (Python), SQLite, React, HTML/CSS, Spoonacular API.
      </p>
    </div>
  );
}
