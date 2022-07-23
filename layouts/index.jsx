import { Grid } from "@mui/material";
import React, { useState } from "react";
import classes from "./Layout.module.css";
import { Box } from "@mui/system";
import WalletMenu from "./WalletMenu";
import useMediaQuery from "../hook/useMediaquery";
import Logo from "../assets/images/logo.png";
import SearchBar from "./Search-bar";
import User from "./User";
import SlideBarMobile from "../layouts/Slidebar/Slidebar-mobile";
import SlideBar from "./Slidebar/Slidebar-desktop";
import Image from "next/image";

function Layout({ children }) {
  // active menu wallet
  const [activeMenuWallet, setActiveMenuWallet] = useState(false);
  const [activeMenuNav, setActiveMenuNav] = useState(false);
  // hook
  const isMobileS = useMediaQuery("(min-width:319px)");
  const isMobileL = useMediaQuery("(min-width:426px)");
  const isTablet = useMediaQuery("(max-width:426px)");
  const isDesktop = useMediaQuery("(min-width: 1440px)");
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
          {isDesktop && <SlideBar />}
        </Grid>
        <Grid item xs={12} lg={10}>
          <div className={classes.MenuRight_container}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {isMobileS && isTablet && (
                <div className={classes.Logo}>
                  <Image src={Logo} alt="logo" />
                </div>
              )}
              {isMobileL && isMobileS && <SearchBar />}
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
