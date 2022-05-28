import React from "react";
import User from "../User/User";
import classes from "./UserSlideBar.module.css";
import { FaEthereum } from "react-icons/fa";
import { Box } from "@mui/system";
function UserSlideBar() {
  return (
    <React.Fragment>
      {/* user table slidebar */}
      <Box display="flex" justifyContent="center">
        <div className={classes.User_container}>
          <Box display="flex" gap="20px">
            <User />
            {/* user info balance and address */}
            <div className={classes.User_info}>
              <Box display="flex" flexDirection="column" gap="10px">
                <Box>User Name</Box>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Box>User Address</Box>
                </Box>
                  {/* <Box>
                    <FaEthereum /> 1000000
                  </Box> */}
              </Box>
            </div>
          </Box>
        </div>
      </Box>
    </React.Fragment>
  );
}

export default UserSlideBar;
