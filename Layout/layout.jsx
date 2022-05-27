import { Grid } from "@mui/material";
import React from "react";
import SearchBar from "./Search-bar/Search-bar";
import SlideBar from "./Slidebar/SlideBar";
import classes from "./Layout.module.css";
import User from "./User/User";
import { Box } from "@mui/system";
import UserSlideBar from "./Slidebar/UserSlideBar";
function Layout({ children }) {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={3}>
          <SlideBar />
        </Grid>
        <Grid item xs={9}>
          <div className={classes.MenuRight_container}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <SearchBar />
              <User type="notification" />
            </Box>
          </div>
          <main>{children}</main>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
