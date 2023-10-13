import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const recipiesUrl = "www.themealdb.com/api/json/v1/1/search.php?s=${userInput}";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(recipiesUrl)
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Recipes Page</h1>
      <input type="text" placeholder="Search" />
      <button>Search</button>

      <div className="recipe-container">
        {recipes.map((recipe) => (
          <>
            <div key={recipe.idMeal} className="recipe-card">
              <h3>{recipe.strMeal}</h3>
              <img src={recipe.strMealThumb} alt="recipe" />
              <p>{recipe.strInstructions}</p>
              <Link to="/favouritesPage">
                <button>Add to Favourites</button>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

// recipies
// setUserInput
// setFavRecipies
// favRecipies
