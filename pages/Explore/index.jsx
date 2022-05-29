
import { Box } from "@mui/system";
import React from "react";
import Card from '../../components/Card/Card'

function Explore() {
  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="40px"
        paddingRight="40px"
      >
        Sort by Chuyen 4 ô chuyen 6 ô
      </Box>
      <Card/>
    </React.Fragment>
  );
}

export default Explore;
