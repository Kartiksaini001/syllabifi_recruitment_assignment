import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

const RightSection = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" style={{ padding: "1.5rem" }}>
      <Paper className={classes.priorityWrapper}>
        <Grid container item xs={12} justifyContent="space-between">
          <Grid item xs={2}>
            <Typography variant="h6">255</Typography>
          </Grid>
          <Grid item xs={2}>
            INR(&#8377;)
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={12}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
};

export default RightSection;
