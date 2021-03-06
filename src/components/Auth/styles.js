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
  submitContainer: {
    margin: "0.8rem 0",
  },
  submit: {
    padding: "8px 16px 8px 10px",
  },
  signupToggleBtn: {
    padding: "0",
    fontSize: "1rem",
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
    "&:hover": {
      backgroundColor: "#dbfaff",
    },
    "&:active": {
      backgroundColor: "#dbfaff",
    },
  },
}));
