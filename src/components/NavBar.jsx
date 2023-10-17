import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/homePage">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/favouritesPage">Favourites</Link>
      <Link to="/contactPage">Contact</Link>
    </div>
  );
}

// favRecipes
