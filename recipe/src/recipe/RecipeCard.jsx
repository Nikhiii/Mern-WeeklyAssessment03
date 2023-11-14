import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
    </div>
  );
};

export default RecipeCard;
