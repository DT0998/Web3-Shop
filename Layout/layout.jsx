import { Grid } from "@mui/material";
import React from "react";
import SlideBar from "./Slidebar/slidebar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
      <Grid item xl={4}>
        <SlideBar />
      </Grid>
      <Grid item xl={8}>
        <main>{children}</main>
      </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
