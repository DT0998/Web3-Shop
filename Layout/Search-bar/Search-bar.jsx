import React from "react";
import classes from "./Search-bar.module.css";
import { FaSearch } from "react-icons/fa";
import { Box } from "@mui/system";

function SearchBar() {
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center"  >
        <div className={classes.SearchBar_container} >
          <FaSearch className={classes.SearchBar_icon}  />
          <input placeholder="Search..." className={classes.SearchBar_input} />
          <span className={classes.SearchBar_enter}>
            Enter
          </span>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default SearchBar;
