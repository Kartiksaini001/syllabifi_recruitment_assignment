import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    borderRadius: "1rem",
    boxShadow: "0px 25px 50px 2px rgba(36,20,72,0.1)",
    padding: "3rem",
    maxWidth: "950px",
  },
  formTitle: {
    fontWeight: "500",
    fontSize: "1.75rem",
  },
  formSubtitle: {
    marginTop: "0.7rem",
  },
  subjectsFormContainer: {
    margin: "4rem 0 6rem",
  },
  checkboxContainer: {
    padding: "0.6rem 1.5rem",
  },
  checkboxCard: {
    border: "2px solid #eeeaf9",
    borderRadius: "0.5rem",
    backgroundColor: "#fcfbfd",
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "relative",
  },
  checkboxCardActive: {
    borderColor: theme.palette.primary.main,
  },
  cardMedia: {
    height: "110px",
    width: "110px",
    borderRadius: "0.5rem",
  },
  cardLabel: {
    fontSize: "1.1rem",
    fontWeight: "500",
    paddingLeft: "1rem",
    width: "min-content",
  },
  checkbox: {
    position: "absolute",
    top: "0",
    right: "0",
    color: "#c8c8ca",
    "&:hover": {
      color: "#929296",
    },
  },
  checkboxActive: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  simpleBtn: {
    padding: "0.5rem 1.75rem",
    fontSize: "1.1rem",
  },
  nextBtn: {
    padding: "0.5rem 2.5rem",
    fontSize: "1.1rem",
  },
}));
