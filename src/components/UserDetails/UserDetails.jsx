import React, { useState } from "react";
import {
  Grow,
  Container,
  Grid,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import SubjectsForm from "./Forms/SubjectsForm";
import PreferencesForm from "./Forms/SubjectsForm";

const forms = [
  {
    title: "What subjects do you specialize in?",
    subtitle: "You can add more than 1 subject",
    component: <SubjectsForm />,
  },
  {
    title: "Form 2",
    subtitle: "",
    component: null,
  },
  {
    title: "Form 3",
    subtitle: "",
    component: null,
  },
  {
    title: "Form 4",
    subtitle: "",
    component: null,
  },
  {
    title: "Set your Preferences",
    subtitle: "",
    component: <PreferencesForm />,
  },
];

const UserDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const [formId, setFormId] = useState(0);

  const handlePrevious = () => {
    if (formId > 0) setFormId(formId - 1);
  };

  const handleNext = () => {
    if (formId === forms.length - 1) {
      history.push("/dashboard/1");
    } else setFormId(formId + 1);
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <Grow in>
      <Container maxWidth="lg" className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <div className={classes.formTitle}>{forms[formId].title}</div>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="textSecondary" className={classes.formSubtitle}>
                {forms[formId].subtitle}
              </Typography>
            </Grid>
            {forms[formId].component}
          </Grid>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                className={classes.simpleBtn}
                color="primary"
                size="large"
                onClick={handlePrevious}
              >
                Previous
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.simpleBtn}
                color="primary"
                size="large"
                onClick={handleSkip}
              >
                Skip
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleNext}
                className={classes.nextBtn}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grow>
  );
};

export default UserDetails;
