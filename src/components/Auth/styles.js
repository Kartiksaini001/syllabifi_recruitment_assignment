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
  loginText: {
    color: theme.palette.primary,
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
  companyLogo: {
    height: "30px",
  },
  companyName: {
    fontWeight: "700",
    // fontSize: "20px",
  },
}));
