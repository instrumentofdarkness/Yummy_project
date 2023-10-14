import RecipiesList from "../components/RecipesList";

export default function RecipesPage({ recipies, setUserInput, setFavRecipies}) {
  return (
    <div>
      Recipes Page
      <RecipiesList recipies={recipies} />
    </div>
  );
}


// favRecipies
