import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  tasksWrapper: {
    padding: "1.5rem",
    marginTop: "1.75rem",
    "& h6": {
      fontWeight: "700",
      fontSize: "1.5rem",
    },
  },
  taskDate: {
    marginTop: "1.3rem",
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#f7f7f8",
      "& a": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      },
    },
    "& td:nth-child(1)": {
      borderRadius: "0.25rem 0 0 0.25rem",
    },
    "& td:nth-child(4)": {
      borderRadius: "0 0.25rem 0.25rem 0",
    },
  },
}));
