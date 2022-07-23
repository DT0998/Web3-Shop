import React from "react";
import classes from "./SlideBar.module.css";
import Logo from "../../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/Button";
import UserSlideBar from "../Slidebar-desktop/Slidebar-User";
import Footer from "../../Footer";
import SlideBarList from "./Slidebar-List";



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
        <SlideBarList />
        <div className={classes.SlideBar_btn}>
          <Button>Connect Wallet</Button>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
