import React from "react";
import RecipesItem from "./RecipesItem";

export default function RecipesList({ recipes, setFavRecipes, favRecipes }) {
  if (!recipes) {
    return (
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipesItem
            key={recipe.idMeal}
            recipe={recipe}
            setFavRecipes={setFavRecipes}
            favRecipes={favRecipes}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipesItem
            key={recipe.idMeal}
            recipe={recipe}
            setFavRecipes={setFavRecipes}
            favRecipes={favRecipes}
          />
        ))}
      </div>
    );
  }
}
