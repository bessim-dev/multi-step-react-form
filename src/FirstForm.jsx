import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";


export default function FirstForm({ hundleChange, nextStep, values }) {
  const onContinue = e => {
    e.preventDefault();
    nextStep();
  }
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid container item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" align="center">
                First step to sign in
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid direction="row" container justify="center" alignItems="center">
          <Grid container direction="column" item xs={4} justify="center">
            <TextField
              fullWidth={true}
              label="first name"
              onChange={hundleChange("firstName")}
              defaultValue={values.firstName}
            />
            <TextField
              style={{ marginTop: "15px" }}
              fullWidth={true}
              label="last name"
              onChange={hundleChange("lastName")}
              defaultValue={values.lastName}
            />
            <TextField
              style={{ marginTop: "15px" }}
              fullWidth={true}
              label="email"
              onChange={hundleChange("email")}
              defaultValue={values.email}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
              onClick={onContinue}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
