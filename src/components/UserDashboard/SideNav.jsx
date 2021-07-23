import React from "react";
import useStyles from "./styles";
import { Typography, Grid, Button } from "@material-ui/core";
import logo from "./assets/logo.svg";
import {
  DashboardRounded,
  AssignmentRounded,
  PollRounded,
  AccountBalanceWalletRounded,
  PersonRounded,
} from "@material-ui/icons";

const SideNav = () => {
  const classes = useStyles();

  const navItems = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: (
        <DashboardRounded
          className={`${classes.sideNavIcon} ${classes.sideNavIconActive}`}
        />
      ),
    },
    {
      label: "Tasks",
      link: "/tasks",
      icon: <AssignmentRounded className={classes.sideNavIcon} />,
    },
    {
      label: "Performance",
      link: "/performance",
      icon: <PollRounded className={classes.sideNavIcon} />,
    },
    {
      label: "Earnings",
      link: "/earnings",
      icon: <AccountBalanceWalletRounded className={classes.sideNavIcon} />,
    },
    {
      label: "Profile",
      link: "/profile",
      icon: <PersonRounded className={classes.sideNavIcon} />,
    },
  ];

  return (
    <div className={classes.sideNavContainer}>
      <div className={classes.company}>
        <img src={logo} alt="Company Logo" style={{ height: "30px" }} />
        &nbsp;&nbsp;&nbsp;
        <Typography variant="h5" className={classes.companyName}>
          Company
        </Typography>
      </div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        style={{ height: "83%" }}
      >
        <Grid container item direction="column">
          {navItems.map((item, id) => (
            <Grid item key={id} xs={12}>
              <Button
                fullWidth
                startIcon={item.icon}
                href={item.link}
                className={`${classes.sideNavBtn} ${
                  item.label === "Dashboard" ? classes.sideNavBtnActive : ""
                }`}
              >
                {item.label}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          item
          spacing={1}
          direction="column"
          style={{ paddingLeft: "0.75rem" }}
        >
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              Terms and Conditions
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" color="textSecondary">
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideNav;
