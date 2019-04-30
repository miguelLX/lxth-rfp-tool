import React, { useState, useEffect } from "react";

// @material-ui/core components
import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";

import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-dashboard-react/layouts/authStyle.jsx";

import { Store } from "../../state/store";
import { login } from "../../state/actions";
/* eslint-disable */

function SignIn(props) {
  const { classes } = props;

  const { state, dispatch } = React.useContext(Store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSnackbar, setShowSnackbar] = useState(false);
  useEffect(() => {
    document.title = `You clicked ${showSnackbar} `;
    let timer1 = setTimeout(() => setShowSnackbar(false), 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, [showSnackbar]); // Only re-run the effect if showSnackbar changes

  return (
    <main className={classes.main}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <div />{" "}
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Snackbar
                place="tc"
                color="danger"
                message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                closeNotification={() => setShowSnackbar(false)}
                open={showSnackbar}
                close
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div />{" "}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button href="\auth\resetpassword" color="transparent" style={{ float: "right" }}>
            Forgot password?
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}>
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );

  function handleLogin() {
    try {
      login(email, password, props.history, dispatch);
      setShowSnackbar(true);
    } catch (error) {
      setShowSnackbar(true);
      alert(error.message);
    }
  }
}

export default withStyles(styles)(SignIn);
