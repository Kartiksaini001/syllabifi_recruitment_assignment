import React from "react";
import useStyles from "./styles";
import { Grid, Avatar } from "@material-ui/core";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import profilePic from "./assets/profile-pic.png";
import SideNav from "./SideNav";

const UserDashboard = () => {
  const classes = useStyles();
  const username = "Nishtha";

  return (
    <div>
      <SideNav />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.topHeader}
      >
        <Grid item>2500 XP</Grid>
        <Grid item>255 INR(&#8377;)</Grid>
        <Grid item>
          <NotificationsRoundedIcon />
        </Grid>
        <Grid item style={{ paddingRight: "2rem" }}>
          <Grid container alignItems="center" className={classes.userContainer}>
            {username}&nbsp;&nbsp;&nbsp;&nbsp;
            <Avatar
              alt="Username"
              src={profilePic}
              className={classes.userAvatar}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDashboard;
