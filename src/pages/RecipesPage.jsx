import RecipiesList from "../components/RecipesList";
import UserInput from "../components/UserInput";

export default function RecipesPage({
  recipes,
  setUserInput,
  setFavRecipes,
  favRecipes,
}) {
  return (
    <div>
      <UserInput setUserInput={setUserInput} setFavRecipes={setFavRecipes} />
      <RecipiesList
        recipes={recipes}
        setFavRecipes={setFavRecipes}
        favRecipes={favRecipes}
      />
    </div>
  );
}
