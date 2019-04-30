/* eslint-disable */
import React, { useState, useEffect } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { Store } from "../../state/store";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
function RFPsPage(props) {
  const { classes } = props;
  const { state, dispatch } = React.useContext(Store);
  console.log(state.user);

  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowSnackbar(false), 5000);
    return () => {
      clearTimeout(timer1);
    };
  }, [showSnackbar]); // Only re-run the effect if showSnackbar changes

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Request For Proposal (RFP)</h4>
        <p className={classes.cardCategoryWhite}>Manage RFPs</p>
      </CardHeader>
      <CardBody>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <div />{" "}
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button fullWidth color="primary" onClick={() => setShowSnackbar(true)}>
                  Top Center
                </Button>
                <Snackbar
                  place="tc"
                  color="danger"
                  icon={AddAlert}
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
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(RFPsPage);
