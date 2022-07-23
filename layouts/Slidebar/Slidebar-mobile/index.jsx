import React from "react";
import classes from "./slidebar.module.css";


function SlideBar({open}) {
  return (
    <React.Fragment>
      {/* overlay */}
      <div
        className={`${classes.SlidebarMenu_overlay} ${
          open && classes.ActiveOverlay
        }`}
        // state from layout
        open={open}
      />
      <div
        className={`${classes.SlidebarMenu_container} ${
          open && classes.ActiveMenu
        }`}
        // state from layout
        open={open}
      >
        {/* menu */}
        test
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
