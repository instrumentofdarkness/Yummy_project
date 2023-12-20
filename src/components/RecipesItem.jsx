import React from "react";

export default function RecipesItem({ recipes, setFavRecipes, favRecipes }) {
  
  function addFavHandler () {setFavRecipes([...favRecipes, recipes]);}
  return (
    <div>
      <h1>
        {recipes.strMeal}
        <span> </span>
        <button
          name="fav"
          onClick={addFavHandler}
        >
          Add to Favourites
        </button>
             
      </h1>
      <img src={recipes.strMealThumb} alt={recipes.strMeal} />
      <p>{recipes.strCategory}</p>
      <p>{recipes.strArea}</p>
      <p>{recipes.strInstructions}</p>
    </div>
  );
}
