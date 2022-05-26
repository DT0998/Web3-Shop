import { Grid } from "@mui/material";
import React from "react";
import SearchBar from "./Search-bar/Search-bar";
import SlideBar from "./Slidebar/slidebar";
import classes from './layout.module.css'
function Layout({ children }) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
      <Grid item xs={3}>
        <SlideBar />
      </Grid>
      <Grid item xs={9}>
        <div className={classes.MenuRight_container}>
        <SearchBar/>
        </div>
        <main>{children}</main>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
