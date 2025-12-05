import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Suggestions.css";

export default function Suggestions() {
  const location = useLocation();
  const ingredients = location.state?.ingredients || "";
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ingredients) return;

    localStorage.setItem("lastSearch", ingredients);

    async function fetchRecipes() {
      setLoading(true);
      try {
        const res = await fetch("http://127.0.0.1:5000/api/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredients })
        });

        const data = await res.json();
        setRecipes(data.recipes || []);
      } catch (e) {
        console.error("Search error:", e);
      }
      setLoading(false);
    }

    fetchRecipes();
  }, [ingredients]);

  const saveRecipe = async (recipe) => {
    try {
      const payload = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary || ""
      };

      const res = await fetch("http://127.0.0.1:5000/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.message === "created") alert("Recipe saved!");
      else if (data.message === "exists") alert("Already saved.");
      else alert("Save failed.");
    } catch {
      alert("Save failed.");
    }
  };

  return (
    <div className="suggestions-container">
      <h2>Recipes for: "{ingredients}"</h2>

      {loading && <p>Loading...</p>}
      {!loading && recipes.length === 0 && <p>No recipes found.</p>}

      <div className="recipe-grid">
        {recipes.map((r) => (
          <div className="recipe-card" key={r.id}>
            <img src={r.image} alt={r.title} />
            <h3>{r.title}</h3>

            <p><strong>Used:</strong> {r.usedIngredients?.join(", ") || "None"}</p>
            <p><strong>Missing:</strong> {r.missedIngredients?.join(", ") || "None"}</p>

            <div className="button-row">
              <Link to={`/details/${r.id}`} state={{ recipe: r }}>
                <button className="btn-primary">View Details</button>
              </Link>

              <button className="btn-secondary" onClick={() => saveRecipe(r)}>
                Save Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
