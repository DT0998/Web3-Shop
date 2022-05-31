import { Grid } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./Search-bar/Search-bar";
import SlideBar from "./Slidebar/SlideBar";
import classes from "./Layout.module.css";
import User from "./User/User";
import { Box } from "@mui/system";
import WalletMenu from "../components/WalletMenu/WalletMenu";

function Layout({ children }) {
  // active menu wallet
  const [activeMenuWallet, setActiveMenuWallet] = useState(false);
  const openMenuWalletHandler = () => {
    setActiveMenuWallet(!activeMenuWallet);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={2}>
          <SlideBar />
        </Grid>
        <Grid item xs={10}>
          <div className={classes.MenuRight_container}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <SearchBar />
              <User type="UserIconNav" onOpen={openMenuWalletHandler} />
            </Box>
            {activeMenuWallet && (
              <WalletMenu
              />
            )}
          </div>
          <main>{children}</main>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
