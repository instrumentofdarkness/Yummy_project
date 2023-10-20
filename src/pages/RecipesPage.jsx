import RecipiesList from "../components/RecipesList";

export default function RecipesPage({ recipes, setUserInput, setFavRecipies }) {
  return (
    <div>
      <RecipiesList recipes={recipes} />
    </div>
  );
}

// favRecipies
