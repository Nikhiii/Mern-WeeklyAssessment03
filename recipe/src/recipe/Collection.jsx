import React from "react";

const Collection = ({ savedRecipes, onDelete }) => {
  return (
    <div className="collection">
      <h2>My Recipe Collection</h2>
      {savedRecipes.map((recipe) => (
        <div key={recipe.id} className="saved-recipe">
          <h3>{recipe.name}</h3>
          <button onClick={() => onDelete(recipe.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Collection;
