import React from "react";

export default function RecipesItem({ recipes, setFavRecipes, favRecipes }) {
  return (
    <div>
      <h1>
        {recipes.strMeal}
        <span> </span>
        <button
          name="fav"
          onClick={() => {
            setFavRecipes([...favRecipes, recipes]);
          }}
        >
          Add to Favourites
        </button>
        {/* const handleAddToFav = (recipe) => {
        let newFav = fav.push(recipe);
          setFav(newFav);
        }; */}
      </h1>
      <img src={recipes.strMealThumb} alt={recipes.strMeal} />
      <p>{recipes.strCategory}</p>
      <p>{recipes.strArea}</p>
      <p>{recipes.strInstructions}</p>
    </div>
  );
}
