import React from "react";

const RecipeDetail = ({ recipe, onSave, isSaved }) => {
  return (
    <div className="recipe-detail">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>Preparation Time: {recipe.preparationTime} minutes</p>
      <p>Serving Size: {recipe.servingSize}</p>
      {isSaved ? (
        <p>Recipe saved in collection.</p>
      ) : (
        <button onClick={() => onSave(recipe)}>Save to Collection</button>
      )}
    </div>
  );
};

export default RecipeDetail;
