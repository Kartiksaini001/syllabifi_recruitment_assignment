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
  size,
  name,
  placeholder,
  handleChange,
  label,
  value,
  required,
  star,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={size} className={classes.inputWrapper}>
      <InputLabel htmlFor={name} className={classes.inputLabel}>
        {label}
        {star && <span style={{ color: "red" }}>*</span>}
      </InputLabel>
      <OutlinedInput
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        variant="outlined"
        defaultValue={value}
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
