import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavouritesPage from "./pages/FavouritesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return <div className="App">
    <NavBar />
    <Routes>
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/recipesPage" element={<RecipesPage />} />
      <Route path="/favouritesPage" element={<FavouritesPage />} />
      <Route path="/contactPage" element={<ContactPage />} />
    </Routes>
  </div>;
}

export default App;

// const [userInput, setUserInput] = useState("");
// const [recipe, setRecipe] = useState([]);
// const [favRecipes, setFavRecipes] = useState([]);