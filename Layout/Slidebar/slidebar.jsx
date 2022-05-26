import React from "react";
import classes from "./slidebar.module.css";
import { GiBlackHoleBolas } from "react-icons/gi";

function SlideBar() {
  return (
    <React.Fragment>
      <div className={classes.SlideBar_container}>
        <svg width="0" height="0">
          <linearGradient
            id="logo-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#fbd3e9" offset="0%" />
            <stop stopColor="#bb377d" offset="100%" />
          </linearGradient>
          {/* logo */}
        </svg>
          <GiBlackHoleBolas
            className={classes.logo}
            style={{ fill: "url(#logo-gradient)" }}
          />
      </div>
    </React.Fragment>
  );
}

export default SlideBar;
