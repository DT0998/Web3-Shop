import React from "react";
import classes from "./WalletMenu.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@mui/system";
function WalletMenu() {
  return (
    <React.Fragment>
      {/* overlay */}
      <div className={classes.WalletMenu_overlay}></div>
      <div className={classes.WalletMenu_container}>
        {/* menu */}
        <div>
          <Box display="flex" gap="10px" alignItems="center">
            <FaUserCircle className={classes.WalletMenu_icon} />{" "}
            <span className={classes.WalletMenu_title}>My Wallet</span>
          </Box>
        </div>
        <div className={classes.WalletMenu_option}>
          Connect with one of our available
          <span className={classes.WalletMenu_content}> Wallet</span> providers
          or create a new one.
        </div>
      </div>
    </React.Fragment>
  );
}

export default WalletMenu;
