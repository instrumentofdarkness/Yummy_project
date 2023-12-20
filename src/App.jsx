import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavouritesPage from "./pages/FavouritesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [favRecipes, setFavRecipes] = useState([]);
  let recipesUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  function getRecipes(url) {
    axios
      .get(url)
      .then((response) => response.data)
      .then((recipes) => {
        setIsLoading(false);
        setRecipes(recipes.meals);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getRecipes(recipesUrl);
  }, [recipesUrl]);
  console.log(favRecipes, "favRecipes");
  console.log(userInput, "userInput");
  if (isLoading) {
    return (
      <Box
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ display: "flex" }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div className="App">
        <NavBar favRecipes={favRecipes} />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/recipes"
            element={
              <RecipesPage
                recipes={recipes}
                setUserInput={setUserInput}
                setFavRecipes={setFavRecipes}
                favRecipes={favRecipes}
              />
            }
          />
          <Route
            path="/favourites"
            element={<FavouritesPage favRecipes={favRecipes} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
