import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { StoreProvider } from "./state/store";

// core components
import Admin from "layouts/Admin.jsx";
import Auth from "layouts/Auth.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

import { configureFakeBackend } from "./state/fake-backend";
configureFakeBackend();
const hist = createBrowserHistory();

ReactDOM.render(
  <StoreProvider>
    <Router history={hist}>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/admin" component={Admin} />
        <Redirect exact from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
