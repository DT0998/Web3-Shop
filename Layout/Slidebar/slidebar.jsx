import React from "react";
import classes from "./slidebar.module.css";
import Logo from "../../assets/image/logo.png";
import Image from "next/image";

function SlideBar() {
  return (
    <React.Fragment>
      <div className={classes.SlideBar_container}>
          <div className={classes.Logo}>
        <Image src={Logo} alt="logo"/>
          </div>
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
