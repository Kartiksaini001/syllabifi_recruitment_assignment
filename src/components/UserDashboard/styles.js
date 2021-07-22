import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  topHeader: {
    height: "3.75rem",
    width: "100vw",
    backgroundColor: "#fff",
    position: "fixed",
    margin: "0",
  },
  userContainer: {
    backgroundColor: "#f8f6fa",
    borderRadius: "100px",
    paddingLeft: "0.8rem",
  },
  userAvatar: {
    margin: "0",
    height: "2.25rem",
    width: "2.25rem",
  },
  sideNavContainer: {
    position: "fixed",
    width: "210px",
    height: "100vh",
    zIndex: "2",
    borderRight: "2px solid #dfe1e6",
    backgroundColor: "#fff",
    padding: "0 0.5rem",
  },
  company: {
    display: "flex",
    alignItems: "center",
    margin: "1rem 0 3rem 1rem",
  },
  companyName: {
    fontWeight: "700",
  },
  sideNavBtn: {
    justifyContent: "left",
    borderRadius: "0.3rem",
    margin: "0.3rem 0",
    fontSize: "0.95rem",
    paddingLeft: "0.8rem",
  },
  sideNavIcon: {
    fontSize: "1.5rem !important",
    color: "#5b5b61",
  },
}));
