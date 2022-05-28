import React from "react";
import classes from "./SlideBarList.module.css";
import { GiShop } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import { MdCollections, MdOutlineFavorite } from "react-icons/md";
import { Box } from "@mui/system";
import Link from "next/link";
function SlideBarList() {
  return (
    <React.Fragment>
      <div className={classes.SlideBarList_container}>
        {/* nft shop */}
        <Link href="/Explore" passHref>
        <div className={`${classes.SlideBarList_menu} ${classes.active}`}>
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            height="100%"
            paddingLeft="20px"
          >
            <GiShop />
            Explore
          </Box>
        </div>
        </Link>
        {/* My Collections */}
        <div className={`${classes.SlideBarList_menu} `}>
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            height="100%"
            paddingLeft="20px"
            marginTop="8px"
          >
            <MdCollections />
            My Collections
          </Box>
        </div>
        {/* Create */}
        <div className={`${classes.SlideBarList_menu} `}>
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            height="100%"
            paddingLeft="20px"
            marginTop="8px"
          >
            <IoIosCreate />
            Create
          </Box>
        </div>
        {/* favorites */}
        <div className={`${classes.SlideBarList_menu}`}>
          <Box
            display="flex"
            alignItems="center"
            gap="20px"
            height="100%"
            paddingLeft="20px"
            marginTop="8px"
          >
            <MdOutlineFavorite />
            Favorites
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SlideBarList;
