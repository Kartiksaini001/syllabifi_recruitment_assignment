import React from "react";
import CheckboxCard from "../CheckboxCard";
import mathsImg from "../assets/maths.png";
import chemistryImg from "../assets/chemistry.png";
import physicsImg from "../assets/physics.png";
import biologyImg from "../assets/biology.png";
import logicalImg from "../assets/logical.png";
import othersImg from "../assets/others.png";
import { Grid } from "@material-ui/core";
import useStyles from "../styles";

const SubjectsForm = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.subjectsFormContainer}>
      <CheckboxCard img={mathsImg} text="Mathematics" />
      <CheckboxCard img={chemistryImg} text="Chemistry" />
      <CheckboxCard img={physicsImg} text="Physics" />
      <CheckboxCard img={biologyImg} text="Biology" />
      <CheckboxCard img={logicalImg} text="Logical Reasoning" />
      <CheckboxCard img={othersImg} text="Others" />
    </Grid>
  );
};

export default SubjectsForm;
