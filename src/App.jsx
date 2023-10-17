import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavouritesPage from "./pages/FavouritesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const recipesUrl =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [favRecipes, setFavRecipes] = useState([]);

  function getRecipes() {
    axios
      .get(recipesUrl)
      .then((response) => response.data)
      .then((recipes) => {
        setIsLoading(false);
        setRecipes(recipes.meals);
        setUserInput(userInput);
        setFavRecipes(favRecipes);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getRecipes();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route
            path="/recipes"
            element={<RecipesPage recipes={recipes} setUserInput={setUserInput} />}
          />
          <Route
            path="/favouritesPage"
            element={<FavouritesPage favRecipes={favRecipes} />}
          />
          <Route path="/contactPage" element={<ContactPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
