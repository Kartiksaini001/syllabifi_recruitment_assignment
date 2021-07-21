import React from "react";
import {
  InputLabel,
  OutlinedInput,
  Grid,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "./styles";

const Input = ({
  half,
  name,
  placeholder,
  handleChange,
  label,
  required,
  star,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={half ? 6 : 12} className={classes.inputWrapper}>
      <InputLabel htmlFor={name} className={classes.inputLabel}>
        {label}
        {star && <sup style={{ color: "red" }}>*</sup>}
      </InputLabel>
      <OutlinedInput
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        variant="outlined"
        required={required}
        fullWidth
        autoFocus={autoFocus}
        type={type}
        endAdornment={
          name === "password" ? (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === "password" ? (
                  <Visibility style={{ color: "#9da7bd" }} fontSize="small" />
                ) : (
                  <VisibilityOff
                    style={{ color: "#9da7bd" }}
                    fontSize="small"
                  />
                )}
              </IconButton>
            </InputAdornment>
          ) : null
        }
      />
    </Grid>
  );
};

export default Input;
