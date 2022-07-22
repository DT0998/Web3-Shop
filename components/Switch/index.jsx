import React, { useState } from "react";
import classes from "./switch.module.css";
function Switch(props) {
  const [toggle, setToggle] = useState(false);


  return (
    <React.Fragment>
      <div
        className={`d-flex ${classes.switches_container} `}
        onClick={()=> setToggle(!toggle)}
      >
        <input
          id={props.SwitchLeftFor}
          name={props.SwitchName}
        />
        <input
          id={props.SwitchRightFor}
          name={props.SwitchName}
        />
        <label
          className={`text-center ${classes.label}`}
          role="button"
        >
          {props.SwitchLeft}
        </label>

        <label
          className={`text-center ${classes.label}`}
          role="button"
        >
          {props.SwitchRight}
        </label>

        <div className={`${classes.switch_wrapper } `}>
          <div
            className={`${classes.switch} ${
              toggle ? classes.Toggle : ""
            } ${classes.NoneToggle}`}
           
          >
            {!toggle ? (
              <div className={`${classes.switch_content} text-center`}>
                {props.SwitchLeft}
              </div>
            ) : (
              <div className={`${classes.switch_content} text-center`}>
                {props.SwitchRight}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Switch;
