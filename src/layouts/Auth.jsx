/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import { authRoutes as routes } from "routes.js";

import authStyle from "assets/jss/material-dashboard-react/layouts/authStyle.jsx";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return <Route path={prop.layout + prop.path} component={prop.component} key={key} />;
      }
    })}
    <Redirect exact from="/auth" to="/auth/signin" />
  </Switch>
);

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };
  render() {
    const { classes, ...rest } = this.props;
    return <div className={classes.container}>{switchRoutes}</div>;
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(authStyle)(Auth);
