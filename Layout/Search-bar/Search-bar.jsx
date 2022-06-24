import React from "react";
import classes from "./Search-bar.module.css";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Box } from "@mui/system";

import useMediaQuery from "../../hook/useMediaquery";
function SearchBar(props) {
  // hook
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        {isMobile &&
        <div className={classes.bar} onClick={props.onOpen}>
          <FaBars/>
        </div>
        }
        <div className={classes.SearchBar_container}>
          <FaSearch className={classes.SearchBar_icon} />
          <input placeholder="Search..." className={classes.SearchBar_input} />
          <span className={classes.SearchBar_enter}>Enter</span>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default SearchBar;
