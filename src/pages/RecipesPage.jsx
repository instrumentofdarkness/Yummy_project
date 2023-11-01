import RecipiesList from "../components/RecipesList";
import SearchForm from "../components/searchForm";

export default function RecipesPage({
  recipes,
  setUserInput,
  setFavRecipes,
  favRecipes,
}) {
  return (
    <div>
      <SearchForm setUserInput={setUserInput} setFavRecipes={setFavRecipes} />
      <RecipiesList
        recipes={recipes}
        setFavRecipes={setFavRecipes}
        favRecipes={favRecipes}
      />
    </div>
  );
}
