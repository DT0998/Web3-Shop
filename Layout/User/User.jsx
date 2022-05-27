import { Box } from "@mui/system";
import React from "react";
import Notification from "./Notifications";
import classes from "./User.module.css";
function User(props) {
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" gap="20px">
        {props.type === "notification" && <Notification />}
        <div className={classes.User_icon}></div>
      </Box>
    </React.Fragment>
  );
}

export default User;
