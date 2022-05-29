import React from "react";
import classes from "./WalletMenu.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Box } from "@mui/system";
import WalletOption from "../WalletOption/WalletOption";
import metamaskLogo from "../../assets/images/WalletOption/metamask-alternative.png";
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
          <div className={classes.WalletMenu_network}>
          <Box padding="16px">
            <WalletOption
              srcImage={metamaskLogo}
              alt="metamask"
              title="Metamask"
              type="network"
              network="Popular"
              backgroundColor="rgb(32, 129, 226)"
              color="rgb(255, 255, 255)"
            />
          </Box>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default WalletMenu;
