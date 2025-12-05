import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const passed = location.state?.recipe;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = passed?.id || params.id;

  useEffect(() => {
    if (!id) return;

    async function loadRecipe() {
      try {
        const res = await fetch(`http://127.0.0.1:5000/api/recipe/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch {
        alert("Unable to load recipe details.");
      } finally {
        setLoading(false);
      }
    }

    loadRecipe();
  }, [id]);

  const saveRecipe = async () => {
    if (!recipe) return;

    try {
      const res = await fetch("http://127.0.0.1:5000/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          summary: recipe.summary || "No summary available",
        }),
      });

      const data = await res.json();

      alert(
        data.message === "created"
          ? "Recipe saved."
          : data.message === "exists"
          ? "Already saved."
          : "Save failed."
      );
    } catch {
      alert("Save failed.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe unavailable.</p>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <button onClick={() => navigate(-1)} className="btn btn-secondary">
        Back
      </button>

      <h1>{recipe.title}</h1>

      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            borderRadius: 10,
            marginBottom: 18,
            marginTop: 8,
          }}
        />
      )}

      {recipe.sourceUrl && (
        <p>
          <strong>Original Recipe: </strong>
          <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
            View on Recipe Website
          </a>
        </p>
      )}

      <button
        onClick={saveRecipe}
        className="btn btn-primary"
        style={{ marginBottom: 20 }}
      >
        Save Recipe
      </button>

      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients?.map((ing, i) => (
          <li key={i}>{ing.original}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: recipe.instructions || "<p>No instructions found.</p>",
        }}
      />
    </div>
  );
}
