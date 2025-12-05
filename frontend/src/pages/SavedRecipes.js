import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SavedRecipes.css";

export default function SavedRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadSaved();
  }, []);

  async function loadSaved() {
    try {
      const res = await fetch("http://127.0.0.1:5000/api/saved");
      const data = await res.json();
      setRecipes(data || []);
    } catch (e) {
      console.error("Error loading saved recipes:", e);
    }
  }

  async function deleteRecipe(id) {
    if (!window.confirm("Delete this saved recipe?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:5000/api/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success) {
        setRecipes((prev) => prev.filter((r) => r.id !== id));
      }
    } catch (e) {
      alert("Delete failed.");
    }
  }

  return (
    <div className="saved-container">
      <h2>Saved Recipes</h2>

      {recipes.length === 0 && <p>No saved recipes yet.</p>}

      <div className="saved-grid">
        {recipes.map((r) => (
          <div className="saved-card" key={r.id}>
            <img src={r.image} alt={r.title} className="saved-image" />

            <h3>{r.title}</h3>

            <div className="button-row">
              <Link to={`/details/${r.id}`} state={{ recipe: r }}>
                <button className="btn-primary">View Details</button>
              </Link>

              <button className="btn-danger" onClick={() => deleteRecipe(r.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
