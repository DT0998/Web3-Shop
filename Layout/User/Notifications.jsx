import { ClassNames } from "@emotion/react";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import classes from './Notifications.module.css'
function Notification() {
    return ( 
        <React.Fragment>
            <IoNotifications className={classes.Notification_icons}/>
        </React.Fragment>
     );
}

export default Notification;