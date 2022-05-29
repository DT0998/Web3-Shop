import React from "react";
import { Box } from "@mui/system";
function Button(props) {
    return ( 
        <React.Fragment>
          <Box textAlign="center">
              {props.title}
          </Box>
        </React.Fragment>
     );
}

export default Button;