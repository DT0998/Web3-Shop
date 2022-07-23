import React from "react";
import { FaWallet } from "react-icons/fa";
import classes from "./Wallet.module.css";
function Wallet() {
  return (
    <React.Fragment>
      <FaWallet className={classes.Wallet_icon} />
    </React.Fragment>
  );
}

export default Wallet;
