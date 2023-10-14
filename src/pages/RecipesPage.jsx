
import { Link } from "react-router-dom";



export default function RecipesPage({recipies}) {
  
  
    


  return (
    <div>
      <h1>Recipes Page</h1>
      <input type="text" placeholder="Search" />
      <button>Search</button>

      <div className="recipe-container">
        {recipies.map((recipe) => (
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
