import React from "react";
import classes from "./slidebar.module.css";
import Button from "../../../components/Button";

function SlideBar({ open }) {
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
        <div className={classes.SlideBarMenu_btn}>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
