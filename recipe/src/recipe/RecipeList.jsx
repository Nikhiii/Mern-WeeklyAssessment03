import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelectRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;
