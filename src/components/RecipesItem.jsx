import React from 'react';

export default function RecipesItem({ recipes, setFavRecipes, favRecipes}) {
  return (
    <div>
      <h1>{recipes.strMeal}</h1>
      <img src={recipes.strMealThumb} alt={recipes.strMeal} />
      <p>{recipes.strInstructions}</p>
    </div>
  )
}

