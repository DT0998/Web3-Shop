import React from "react";
import Image from "next/image";
import classes from "./WalletOption.module.css";
import { Box } from "@mui/system";
function WalletOption(props) {
  return (
    <React.Fragment>
        <div className={classes.WalletOption_container}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" gap="10px">
            <div className={classes.WalletOption_img}>
              <Image src={props.srcImage} alt={props.altImage} />
            </div>
            <span>{props.title}</span>
          </Box>
          {props.type === "network" && (
            <Box>
              <span
                className={classes.WalletOption_network}
                style={{
                  backgroundColor: props.backgroundColor,
                  color: props.color,
                }}
              >
                {props.network}
              </span>
            </Box>
          )}
        </Box>
        </div>
    </React.Fragment>
  );
}

export default WalletOption;
