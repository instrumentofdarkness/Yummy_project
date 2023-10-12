import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/HomePage">Home</Link>
      <Link to="/recipePage">Recipe</Link>
      <Link to="/favouritesPage">Favourites</Link>
      <Link to="/contactPage">Contact</Link>
    </div>
  );
}
