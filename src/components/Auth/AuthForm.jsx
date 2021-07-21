import React, { useState } from "react";
import useStyles from "./styles";
import { Typography, Button } from "@material-ui/core";
import logo from "./assets/logo.svg";
import { Grid } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import Input from "./Input";

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform user authentication
    // Register user

    if (isSignup) history.push("/details");
    else history.push("/dashboard");
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    // perform user authentication

    history.push("/details");
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later");
    history.push("/auth");
  };

  return (
    <div>
      <div className={classes.company}>
        <img src={logo} alt="Logo" className={classes.companyLogo} />
        &nbsp;&nbsp;&nbsp;
        <Typography variant="h5" className={classes.companyName}>
          Company
        </Typography>
      </div>
      <div>
        <Typography variant="h5" className={classes.formTitle}>
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <Input
                name="name"
                label="Name"
                placeholder="Enter full name"
                type="text"
                handleChange={handleChange}
                autoFocus
                required
              />
            )}
            <Input
              name="email"
              label="Email"
              placeholder="Enter email"
              type="email"
              handleChange={handleChange}
              required
            />
            <Input
              name="password"
              label="Password"
              placeholder="Enter password"
              handleChange={handleChange}
              required
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Re-enter Password"
                placeholder="Re-enter Password"
                type="password"
                handleChange={handleChange}
                required
              />
            )}
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignup ? "Sign Up" : "Log In"}
              </Button>
            </Grid>
            <Grid item>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <Button onClick={switchMode}>
                {isSignup ? "Login here" : "Register here"}
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item className={classes.googleSignupText}>
              Or Sign Up with&nbsp;
            </Grid>
            <Grid item>
              <GoogleLogin
                clientId={GOOGLE_ID}
                render={(renderProps) => (
                  <Button
                    className={classes.googleButton}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    // startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
