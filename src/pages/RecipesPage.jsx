import RecipiesList from "../components/RecipesList";
import SearchForm from "../components/searchForm";

export default function RecipesPage({ recipes, setUserInput, setFavRecipies }) {
  return (
    <div>
      <SearchForm setUserInput={setUserInput} setFavRecipies={setFavRecipies} />

      <RecipiesList recipes={recipes} />
    </div>
  );
}

// favRecipies
