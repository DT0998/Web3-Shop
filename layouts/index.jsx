import { Grid } from "@mui/material";
import React, { useState } from "react";
import classes from "./Layout.module.css";
import { Box } from "@mui/system";
import WalletMenu from "./WalletMenu";
import useMediaQuery from "../hook/useMediaquery";

import SearchBar from "./Search-bar";
import User from "./User";
import SlideBarMobile from "../layouts/Slidebar/Slidebar-mobile";
import SlideBar from "./Slidebar/Slidebar-desktop";

function Layout({ children }) {
  // active menu wallet
  const [activeMenuWallet, setActiveMenuWallet] = useState(false);
  const [activeMenuNav, setActiveMenuNav] = useState(false);
  // hook
  const isMobile = useMediaQuery("(min-width:1440px)");
  const openMenuWalletHandler = () => {
    setActiveMenuWallet(!activeMenuWallet);
  };
  const openMenuNavHandler = () => {
    setActiveMenuNav(!activeMenuNav);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={0} lg={2}>
          {isMobile && <SlideBar />}
        </Grid>
        <Grid item xs={12} lg={10}>
          <div className={classes.MenuRight_container}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <SearchBar />
              <User
                type="UserIconNav"
                onOpenWallet={openMenuWalletHandler}
                onOpenNav={openMenuNavHandler}
              />
            </Box>
            <WalletMenu open={activeMenuWallet} />
            <SlideBarMobile open={activeMenuNav} />
          </div>
          <main>{children}</main>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
