import React from "react";

export default function FavouritesPage({ favRecipes }) {
  return <div>
    {favRecipes.map((favRecipe) => {
      return (
        <p>{favRecipe.strMeal}</p>
         )
    }
    )}
  </div>;
}
