import { Box } from "@mui/system";
import React, { useState } from "react";
// import Notification from "./Notifications";
import classes from "./User.module.css";
import Wallet from "./Wallet";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
// hook
import useMediaQuery from "../../hook/useMediaquery";
function User(props) {
  //  state close
  const [openNav, setOpenNav] = useState(false);
  // hook
  const isMobileS = useMediaQuery("(min-width:319px)");
  const isMobileL = useMediaQuery("(min-width:426px)");
  const isTablet = useMediaQuery("(max-width:1024px)");
  const openNavHandle = () => {
    setOpenNav(!openNav);
  };
  return (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        {/* {props.type === "UserIconNav" && <Notification />} */}
        <div className={classes.User_icon}></div>
        {props.type === "UserIconNav" &&
          isMobileL &&
          isMobileS &&(
            <div onClick={props.onOpenWallet} className={classes.User_icon}>
              <Wallet />
            </div>
          )}
        {isTablet && (
          <div className={classes.bar} onClick={props.onOpenNav}>
            <div onClick={openNavHandle}>
              {openNav ? (
                <AiOutlineClose className={classes.close} />
              ) : (
                <FaBars className={classes.bar} />
              )}
            </div>
          </div>
        )}
      </Box>
    </React.Fragment>
  );
}

export default User;
