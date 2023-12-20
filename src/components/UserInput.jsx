import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function UserInput({ setUserInput }) {
  function handleSearch(event) {
    event.preventDefault();
    setUserInput(event.target.value);
  }
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleSearch}
        />
      </Box>
    </div>
  );
}
