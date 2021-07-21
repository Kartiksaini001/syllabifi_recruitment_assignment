import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    paddingTop: "2.5rem",
    paddingBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    borderRadius: "1rem",
    boxShadow: "0px 25px 50px 2px rgba(36,20,72,0.1)",
    padding: "3rem",
    maxWidth: "900px",
  },
  displayImg: {
    maxHeight: "100%",
    maxWidth: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
  authFooter: {
    padding: "1.25rem",
    display: "flex",
    justifyContent: "center",
    fontSize: "1.5rem",
    color: "#5b5b61",
  },
  footerText: {
    fontSize: "1.1rem",
    color: "#9da7bd",
    textDecoration: "none",
  },
  company: {
    display: "flex",
    alignItems: "center",
  },
  companyName: {
    fontWeight: "700",
  },
  formTitle: {
    margin: "1.5rem 0",
    fontWeight: "700",
  },
  inputWrapper: {
    marginBottom: "0.9rem",
  },
  inputLabel: {
    fontSize: "0.8rem",
    color: "#25252d",
    marginBottom: "7px",
  },
  submitContainer: {
    margin: "0.8rem 0",
  },
  submit: {
    padding: "8px 16px 8px 10px",
    fontSize: "1.1rem",
  },
  signupToggleBtn: {
    padding: "0",
  },
  googleSignupContainer: {
    marginTop: "1.75rem",
  },
  googleSignupText: {
    fontSize: "1.1rem",
  },
  googleButton: {
    padding: "5px 16px",
    color: "#5e6c84",
    fontWeight: "500",
    background: "#f3f7ff",
    borderRadius: "40px",
    fontSize: "1.15rem",
    "&:hover": {
      backgroundColor: "#dbfaff",
    },
    "&:active": {
      backgroundColor: "#dbfaff",
    },
  },
}));
