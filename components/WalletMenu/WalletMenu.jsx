import React from "react";
import { useState } from "react";
import classes from "./WalletMenu.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@mui/system";
import WalletOption from "../WalletOption/WalletOption";
import MetamaskLogo from "../../assets/images/WalletOption/metamask-alternative.png";
import WalletConnectLogo from "../../assets/images/WalletOption/walletconnect-alternative.webp";
import CoinbaseWalletLogo from "../../assets/images/WalletOption/walletlink-alternative.webp";
import PhantomLogo from "../../assets/images/WalletOption/phantom.svg";
import GlowLogo from "../../assets/images/WalletOption/glow.svg";
import Button from "../Button/Button";

function WalletMenu({ open }) {
  return (
    <React.Fragment>
      {/* overlay */}
      <div
        className={`${classes.WalletMenu_overlay} ${
          open && classes.ActiveOverlay
        }`}
        // state from layout
        open={open}
      />
      <div
        className={`${classes.WalletMenu_container} ${
          open && classes.ActiveMenu
        }`}
        // state from layout
        open={open}
      >
        {/* menu */}
        <Box display="flex" gap="10px" alignItems="center" paddingLeft="20px">
          <FaUserCircle className={classes.WalletMenu_icon} />{" "}
          <span className={classes.WalletMenu_title}>My Wallet</span>
        </Box>
        {/* line */}
        <div className={classes.WalletMenu_line}></div>
        {/* option wallet */}
        <div className={classes.WalletMenu_option}>
          <Box paddingLeft="20px" paddingRight="20px">
            Connect with one of our available
            <span className={classes.WalletMenu_content}> Wallet</span>{" "}
            providers or create a new one.
          </Box>
          <div className={classes.WalletMenu_network}>
            {/* metamask */}
            <div className={classes.WalletMenu_cursor}>
              <Box padding="16px" borderBottom="1px solid rgb(229, 232, 235)">
                <WalletOption
                  srcImage={MetamaskLogo}
                  alt="Metamask"
                  title="Metamask"
                  type="network"
                  network="Available"
                  backgroundColor="rgb(32, 129, 226)"
                  color="rgb(255, 255, 255)"
                />
              </Box>
            </div>
            {/* coinbase wallet */}
            <div className={classes.WalletMenu_cursor}>
              <Box padding="16px" borderBottom="1px solid rgb(229, 232, 235)">
                <WalletOption
                  srcImage={CoinbaseWalletLogo}
                  alt="Coinbase Wallet"
                  title="Coinbase Wallet"
                  type="network"
                  network="Unavailable"
                  backgroundColor="rgb(229, 232, 235)"
                  color="rgb(112, 122, 131)"
                />
              </Box>
            </div>
            {/* wallet connect */}
            <div className={classes.WalletMenu_cursor}>
              <Box padding="16px" borderBottom="1px solid rgb(229, 232, 235)">
                <WalletOption
                  srcImage={WalletConnectLogo}
                  alt="WalletConnect"
                  title="WalletConnect"
                  type="network"
                  network="Unavailable"
                  backgroundColor="rgb(229, 232, 235)"
                  color="rgb(112, 122, 131)"
                />
              </Box>
            </div>
            {/* phantom */}
            <div className={classes.WalletMenu_cursor}>
              <Box padding="16px" borderBottom="1px solid rgb(229, 232, 235)">
                <WalletOption
                  srcImage={PhantomLogo}
                  alt="Phantom"
                  title="Phantom"
                  type="network"
                  network="Unavailable"
                  backgroundColor="rgb(229, 232, 235)"
                  color="rgb(112, 122, 131)"
                />
              </Box>
            </div>
            {/* glow */}
            {/* <div className={classes.WalletMenu_cursor}>
              <Box padding="16px" borderBottom="1px solid rgb(229, 232, 235)">
                <WalletOption
                  srcImage={GlowLogo}
                  alt="Glow"
                  title="Glow"
                  type="network"
                  network="Unavailable"
                  backgroundColor="rgb(229, 232, 235)"
                  color="rgb(112, 122, 131)"
                />
              </Box>
            </div> */}
            {/* button show more */}
            <div className={classes.WalletMenu_cursor}>
              <Box padding="16px" borderBottom="1px solid rgb(229, 232, 235)">
                <Button title="Show more options" />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WalletMenu;
