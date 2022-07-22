import React from "react";
import { Box } from "@mui/system";
function Button(props) {
  return (
    <React.Fragment>
      <Box textAlign="center" {...props}/>
    </React.Fragment>
  );
}

export default Button;
