import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { ArrowForwardRounded, DescriptionRounded } from "@material-ui/icons";
import Tasks from "./Tasks/Tasks";
import BestPractices from "./BestPractices";
import useStyles from "./styles";

const MidSection = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container item spacing={3}>
        <Grid item xs={7}>
          <Paper className={classes.priorityWrapper}>
            <DescriptionRounded color="secondary" />
            <Typography variant="h6">See What’s on priority?</Typography>
            <div className={classes.textWithArrow}>
              <Typography variant="body1" color="textSecondary">
                Complete <span>12 rejected questions</span> to earn <span>&#8377; 30/q</span>
              </Typography>
              <ArrowForwardRounded
                color="secondary"
                className={classes.forwardArrow}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.priorityWrapper}>
            <DescriptionRounded color="primary" />
            <Typography variant="body1" color="textSecondary">
              New Tasks
            </Typography>
            <div className={classes.textWithArrow}>
              <Typography variant="h6">12</Typography>
              <ArrowForwardRounded
                color="primary"
                className={classes.forwardArrow}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container item>
        <Tasks />
      </Grid>
      <Grid container item>
        <BestPractices />
      </Grid>
    </Grid>
  );
};

export default MidSection;
