import React from "react";
import RecipesItem from "./RecipesItem";

export default function RecipesList({ recipes, setFavRecipes, favRecipes }) {
  return (
    <div>
      {recipes.map((recipes) => {
        return (
          <RecipesItem
            key={recipes.idMeal}
            recipes={recipes}
            setFavRecipes={setFavRecipes}
            favRecipes={favRecipes}
          />
        );
      })}
    </div>
  );
}