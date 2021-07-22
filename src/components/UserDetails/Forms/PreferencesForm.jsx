import React, { useState } from "react";
import useStyles from "../styles";
import {
  Grid,
  Checkbox,
  FormControl,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import Input from "../../Input";

const initialState = {
  username: "",
  dailyHours: 1,
  languages: {
    english: false,
    telugu: false,
    french: false,
    hindi: false,
    tamil: false,
    german: false,
    marathi: false,
    kashmiri: false,
    spanish: false,
    kannada: false,
    malayalam: false,
    russian: false,
  },
  hasStylus: false,
};

const PreferencesForm = () => {
  const classes = useStyles();
  const [username, setUsername] = useState(initialState.username);
  const [dailyLimit, setDailyLimit] = useState(initialState.dailyLimit);
  const [hasStylus, setHasStylus] = useState(initialState.hasStylus);
  const [languages, setLanguages] = useState(initialState.languages);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleChange = (event) => {
    setLanguages({ ...languages, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container className={classes.preferencesFormContainer}>
      <Grid container item xs={12} justifyContent="space-between">
        <Input
          label="Set your User Name"
          name="username"
          placeholder="eg. John Doe"
          type="text"
          size={7}
          onChange={(e) => setUsername(e.target.value)}
          required
          star
        />
        <Input
          label="Set your daily hours"
          name="dailyLimit"
          type="number"
          size={4}
          onChange={(e) => setDailyLimit(e.target.value)}
          value={dailyLimit}
          required
          star
        />
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <div className={classes.languagesGroupTitle}>
            Choose your preferred languages
          </div>
          <FormGroup className={classes.languagesGroup}>
            <Grid container justifyContent="space-between">
              {Object.keys(languages).map((key, index) => (
                <FormControlLabel
                  key={key}
                  className={classes.languages}
                  control={
                    <Checkbox
                      checked={languages[key]}
                      size="small"
                      className={`${classes.checkboxDisplay} ${
                        languages[key] ? classes.checkboxActive : ""
                      }`}
                      color="primary"
                      onChange={handleChange}
                      name={key}
                    />
                  }
                  label={
                    <Typography variant="body1" color="textSecondary">
                      {capitalize(key)}
                    </Typography>
                  }
                />
              ))}
            </Grid>
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid container item justifyContent="space-between">
        <Grid item xs={12} md={8}>
          <Typography variant="body1" className={classes.hasStylusText}>
            Do you have a Pen-tablet/i-pad with stylus/ android tablet with
            stylus?
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setHasStylus(true)}
            className={classes.hasStylusBtn}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setHasStylus(false)}
            className={classes.hasStylusBtn}
          >
            No
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PreferencesForm;
