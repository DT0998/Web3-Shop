import React from "react";
import classes from "./SlideBar.module.css";
import Logo from "../../assets/image/logo.png";
import Image from "next/image";
import UserSlideBar from "./UserSlideBar";
import SlideBarList from "./SlideBarList";
import Footer from "../Footer/Footer";
import Link from 'next/link'
function SlideBar() {
  return (
    <React.Fragment>
      <div className={classes.SlideBar_container}>
        <Link href="/" passHref>
        <div className={classes.Logo}>
          <Image src={Logo} alt="logo" />
        </div>
        </Link>
        <UserSlideBar />
        <SlideBarList/>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
