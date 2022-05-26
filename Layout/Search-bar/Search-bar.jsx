import React from "react";
import classes from "./Search-bar.module.css";
import { FaSearch } from "react-icons/fa";
import { Box } from "@mui/system";

function SearchBar() {
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        <div className={classes.SearchBar_container} role="button">
          <FaSearch className={classes.SearchBar_icon} />
          <input placeholder="Search..." className={classes.SearchBar_input} />
        </div>
      </Box>
    </React.Fragment>
  );
}

export default SearchBar;
