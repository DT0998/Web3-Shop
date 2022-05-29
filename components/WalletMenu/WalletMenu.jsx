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
        </div>
      </div>
    </React.Fragment>
  );
}

export default WalletMenu;
