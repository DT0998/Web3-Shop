import React from "react";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import classes from "./Footer.module.css";
import { Box } from "@mui/system";
import { FaGithubSquare } from "react-icons/fa";
function Footer() {
  return (
    <React.Fragment>
      <div className={classes.Footer_container}>
        <Box display="flex" alignItems="center">
          <FaGithubSquare className={classes.Logo} />
          <Box display="flex" flexDirection="column">
            <span className={classes.Footer_copyright}>
              Copyright &copy; 2021
            </span>
            <span className={classes.Footer_copyright}>
              Feel free to contact me
            </span>
          </Box>
        </Box>
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
