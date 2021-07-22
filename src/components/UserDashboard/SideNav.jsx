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
      icon: <DashboardRounded className={classes.sideNavIcon} />,
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
      <Grid container direction="column">
        {navItems.map((item, id) => (
          <Grid item key={id} xs={12}>
            <Button
              fullWidth
              startIcon={item.icon}
              href={item.link}
              className={classes.sideNavBtn}
            >
              {item.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SideNav;
