import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import classes from "./Footer.module.css";
import { Box } from "@mui/system";

function Footer() {
  return (
    <React.Fragment>
      <div className={classes.Footer_container}>
        <div className={classes.Logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <Box marginTop="8px" marginBottom="8px">
        <span className={classes.Footer_title}>Miniso</span>
        </Box>
        <span>
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </span>
      </div>
    </React.Fragment>
  );
}

export default Footer;
