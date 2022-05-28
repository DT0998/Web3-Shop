import React from "react";
import classes from "./SlideBar.module.css";
import Logo from "../../assets/image/logo.png";
import Image from "next/image";
import UserSlideBar from "./UserSlideBar";
import SlideBarList from "./SlideBarList";

function SlideBar() {
  return (
    <React.Fragment>
      <div className={classes.SlideBar_container}>
        <div className={classes.Logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <UserSlideBar />
        <SlideBarList/>
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
