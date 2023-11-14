import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import Collection from "./Collection";
import "./Recipe.css";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const onSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const onSaveRecipe = () => {
    if (
      selectedRecipe &&
      !savedRecipes.some((recipe) => recipe.id === selectedRecipe.id)
    ) {
      setSavedRecipes([...savedRecipes, selectedRecipe]);
    }
  };

  const onDeleteRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id);
    setSavedRecipes(updatedRecipes);
  };

  const sampleRecipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      description: "A classic Italian pasta dish with creamy egg sauce.",
      image: require("./recipe1.jpg"),
      preparationTime: 20,
      servingSize: 2,
    },
    {
      id: 2,
      name: "Chicken Tacos",
      description: "Delicious tacos filled with seasoned chicken and veggies.",
      image: require("./recipe2.jpg"),
      preparationTime: 30,
      servingSize: 4,
    },
    {
      id: 3,
      name: "Vegetable Stir-Fry",
      description: "A healthy and colorful stir-fry with assorted vegetables.",
      image: require("./recipe3.jpg"),
      preparationTime: 25,
      servingSize: 3,
    },
    {
      id: 4,
      name: "Chocolate Chip Cookies",
      description: "Classic homemade cookies with gooey chocolate chips.",
      image: require("./recipe4.jpg"),
      preparationTime: 15,
      servingSize: 12,
    },
    {
      id: 5,
      name: "Mango Smoothie",
      description: "Refreshing smoothie with fresh mangoes and yogurt.",
      image: require("./recipe5.jpg"),
      preparationTime: 10,
      servingSize: 2,
    },
  ];

  return (
    <div className="app">
      <h1>CulinaryCanvas</h1>
      <div className="container">
        <RecipeList recipes={sampleRecipes} onSelectRecipe={onSelectRecipe} />
        {selectedRecipe && (
          <RecipeDetail
            recipe={selectedRecipe}
            onSave={onSaveRecipe}
            isSaved={savedRecipes.some(
              (recipe) => recipe.id === selectedRecipe.id
            )}
          />
        )}
        <Collection savedRecipes={savedRecipes} onDelete={onDeleteRecipe} />
      </div>
    </div>
  );
};

export default App;
