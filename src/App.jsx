import "./App.css";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import FavouritesPage from "./pages/FavouritesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipePage" element={<RecipePage />} />
      <Route path="/favouritesPage" element={<FavouritesPage />} />
      <Route path="/contactPage" element={<ContactPage />} />
    </Routes>
  </div>;
}

export default App;
