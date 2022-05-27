import React from "react";
import User from "../User/User";
import classes from "./UserSlideBar.module.css";
import { FaEthereum } from "react-icons/fa";
import { Box } from "@mui/system";
function UserSlideBar() {
  return (
    <React.Fragment>
      {/* user table slidebar */}
      <div className={classes.User_container}>
        <Box display="flex" gap="20px">
          <User />
          <Box display="flex" flexDirection="column" gap="10px">
            User Name
    
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>User Address</Box>
              <Box>
                <FaEthereum /> 0.05
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default UserSlideBar;
