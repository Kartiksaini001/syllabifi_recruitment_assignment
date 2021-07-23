import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    padding: "3rem",
    width: "930px",
  },
  formTitle: {
    fontWeight: "500",
    fontSize: "1.75rem",
  },
  formSubtitle: {
    marginTop: "0.7rem",
  },
  dotsContainer: {
    textAlign: "center",
    marginBottom: "3.5rem",
  },
  dot: {
    width: "0.5rem",
    height: "0.5rem",
    display: "inline-block",
    backgroundColor: "#fff",
    margin: "0 0.25rem",
    borderRadius: "20px",
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    transition: "background-color 0.5s, width 0.5s",
  },
  dotSuccess: {
    backgroundColor: theme.palette.success.main,
    borderColor: theme.palette.success.main,
  },
  dotActive: {
    width: "2.5rem",
    backgroundColor: "#443663",
    borderColor: "#443663",
  },
  subjectsFormContainer: {
    margin: "4rem 0 6rem",
  },
  preferencesFormContainer: {
    margin: "1.5rem 0 3rem",
    width: "580px",
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
  checkboxDisplay: {
    color: "#c8c8ca",
    "&:hover": {
      color: "#929296",
    },
  },
  checkboxPosition: {
    position: "absolute",
    top: "0",
    right: "0",
  },
  checkboxActive: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  languagesGroup: {
    border: "2px solid #eeeaf9",
    borderRadius: "0.5rem",
    backgroundColor: "#fcfbfd",
    padding: "0.65rem 1.5rem",
    marginBottom: "2.5rem",
  },
  languagesGroupTitle: {
    fontSize: "1.1rem",
    fontWeight: "500",
    margin: "1rem 0",
  },
  languages: {
    marginRight: "0",
    flex: "1 0 38%",
    "&:nth-child(3n)": {
      flexBasis: "18%",
    },
  },
  hasStylusText: {
    fontSize: "1.05rem",
  },
  hasStylusBtn: {
    marginLeft: "1rem",
    padding: "0.35rem 1.5rem",
  },
  simpleBtn: {
    padding: "0.5rem 1.75rem",
  },
  nextBtn: {
    padding: "0.5rem 2.5rem",
  },
}));
