import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import logo from "../../assets/chef.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Link to="/homePage">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/favouritesPage">Favourites</Link>
      <Link to="/contactPage">Contact</Link>
    </div>
  );
}

// favRecipes
