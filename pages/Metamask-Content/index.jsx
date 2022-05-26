import { Box } from "@mui/material";
import React from "react";
import CardTest from "../../components/Card/Card";
import { UseMetamask } from "../../store";

function MetamaskContent() {
  const [state] = UseMetamask();
  const { UserAddress } = state;
  const hasAccount = UserAddress.length <= 0;
  console.log(UserAddress);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          m: 4,
        }}
      >
        {!hasAccount && (
          <React.Fragment>
            <CardTest />
            <CardTest />
          </React.Fragment>
        )}
        <CardTest />
        <CardTest />
      </Box>
    </React.Fragment>
  );
}

export default MetamaskContent;
