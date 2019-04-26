import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-dashboard-react/layouts/authStyle.jsx";

function ResetPassword(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Account recovery
        </Typography>
        <Typography component="h3" align="center">
          <p>Enter your email address and we will send you a link to reset your password.</p>
        </Typography>

        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Send password reset email
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(ResetPassword);
