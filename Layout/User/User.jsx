import { Box } from "@mui/system";
import React from "react";
// import Notification from "./Notifications";
import classes from "./User.module.css";
import Wallet from "./Wallet";

function User(props) {
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" gap="40px">
        {/* {props.type === "UserIconNav" && <Notification />} */}
        <div className={classes.User_icon}></div>
        {props.type === "UserIconNav" && (
          <div onClick={props.onOpen}>
            <Wallet />
          </div>
        )}
      </Box>
    </React.Fragment>
  );
}

export default User;
