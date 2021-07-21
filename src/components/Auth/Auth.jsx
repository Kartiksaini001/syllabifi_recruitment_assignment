import React from "react";
import { Container, Grid, Paper, Grow, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import FormImg from "./assets/form-img.png";
import AuthForm from "./AuthForm";

const Auth = () => {
  const classes = useStyles();
  return (
    <Grow in>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <Grid
            container
            justifyContent="space-between"
            direction="row"
            spacing={6}
          >
            <Grid item xs={12} md={7}>
              <img src={FormImg} alt="" className={classes.displayImg} />
            </Grid>
            <Grid item xs={12} md={5}>
              <AuthForm />
            </Grid>
          </Grid>
        </Paper>
        <div className={classes.authFooter}>
          <Typography
            className={classes.footerText}
            variant="body2"
            component={Link}
            to="/"
          >
            Privacy Policy
          </Typography>
          &nbsp;&nbsp;&bull;&nbsp;&nbsp;
          <Typography
            className={classes.footerText}
            variant="body2"
            component={Link}
            to="/"
          >
            Terms and Conditions
          </Typography>
        </div>
      </Container>
    </Grow>
  );
};

export default Auth;
