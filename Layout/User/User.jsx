import { Box } from "@mui/system";
import React from "react";
// import Notification from "./Notifications";
import classes from "./User.module.css";
import Wallet from "./Wallet";
import { FaBars } from "react-icons/fa";
import useMediaQuery from "../../hook/useMediaquery";
function User(props) {
    // hook
    const isMobile = useMediaQuery("(max-width:1024px)");
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
        {isMobile &&
        <div className={classes.bar} onClick={props.onOpen}>
          <FaBars/>
        </div>
        }
      </Box>
    </React.Fragment>
  );
}

export default User;
