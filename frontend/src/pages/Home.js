import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();

  const addIngredient = () => {
    if (!input.trim()) return;
    setIngredients([...ingredients, input.trim()]);
    setInput("");
  };

  const removeIngredient = (item) => {
    setIngredients(ingredients.filter((i) => i !== item));
  };

  const search = () => {
    if (ingredients.length === 0) return;
    navigate("/suggestions", { state: { ingredients: ingredients.join(",") } });
  };

  const exampleRecipes = [
    { id: 716429, title: "Pasta with Garlic, Scallions & Kale", image: "https://spoonacular.com/recipeImages/716429-312x231.jpg" },
    { id: 715538, title: "Chicken Fajita Stuffed Peppers", image: "https://spoonacular.com/recipeImages/715538-312x231.jpg" },
    { id: 716627, title: "Easy Homemade Chili", image: "https://spoonacular.com/recipeImages/716627-312x231.jpg" },
    { id: 782600, title: "Quinoa Salad with Vegetables", image: "https://spoonacular.com/recipeImages/782600-312x231.jpg" },
    { id: 648279, title: "Tomato Herb Omelette", image: "https://spoonacular.com/recipeImages/648279-312x231.jpg" },
    { id: 660306, title: "Vegetable Stir Fry", image: "https://spoonacular.com/recipeImages/660306-312x231.jpg" },
    { id: 1096219, title: "Creamy Tomato Pasta", image: "https://spoonacular.com/recipeImages/1096219-312x231.jpg" },
    { id: 652423, title: "Chicken Rice Bowl", image: "https://spoonacular.com/recipeImages/652423-312x231.jpg" }
  ];

  return (
    <div className="home-container">
      <h1>Find Recipes Based on Your Ingredients</h1>

      <div className="ingredient-input">
        <input
          placeholder="Enter an ingredient"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addIngredient}>Add</button>
      </div>

      <ul className="ingredient-list">
        {ingredients.map((item, index) => (
          <li key={index} className="ingredient-item">
            {item}
            <button onClick={() => removeIngredient(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <button
        className="search-btn"
        onClick={search}
        disabled={ingredients.length === 0}
      >
        Search Recipes
      </button>

      <h2>Example Recipes</h2>

      <div className="example-grid">
        {exampleRecipes.map((r) => (
          <Link
            to={`/details/${r.id}`}
            state={{ recipe: r }}
            key={r.id}
            className="example-card"
          >
            <img src={r.image} alt={r.title} />
            <p>{r.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
