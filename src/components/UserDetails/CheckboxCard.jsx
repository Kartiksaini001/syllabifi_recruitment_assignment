import React, { useState } from "react";
import { Card, CardMedia, Grid, Checkbox } from "@material-ui/core";
import useStyles from "./styles";

const CheckboxCard = ({ img, text }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.checkboxContainer}>
      <Card
        elevation={0}
        className={`${classes.checkboxCard} ${
          checked ? classes.checkboxCardActive : ""
        }`}
      >
        <CardMedia className={classes.cardMedia} image={img} title={text} />
        <div className={classes.cardLabel}>{text}</div>
        <Checkbox
          className={`${classes.checkboxDisplay} ${classes.checkboxPosition} ${
            checked ? classes.checkboxActive : ""
          }`}
          color="primary"
          checked={checked}
          onChange={handleChange}
        />
      </Card>
    </Grid>
  );
};

export default CheckboxCard;
