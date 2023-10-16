import RecipiesList from "../components/RecipesList";

export default function RecipesPage({ recipes, setUserInput, setFavRecipies }) {
  return (
    <div>
      Recipes Page
      <RecipiesList recipes={recipes} />
    </div>
  );
}

// favRecipies
