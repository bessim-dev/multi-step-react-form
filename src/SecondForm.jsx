import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function SecondForm({
  nextStep,
  values,
  prevStep,
  hundleChange,
}) {

  const onBack = (e) => {
    e.preventDefault();
    prevStep();
  };
  const onContinue = (e) => {
    e.preventDefault();
    nextStep();
  };
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
                second step to sign in
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid direction="row" container justify="center" alignItems="center">
          <Grid container direction="column" item xs={4} justify="center">
            <TextField
              fullWidth={true}
              label="occupation"
              onChange={hundleChange("ocuppation")}
              defaultValue={values.occupation}
            />
            <TextField
              style={{ marginTop: "15px" }}
              fullWidth={true}
              label="bio"
              onChange={hundleChange("bio")}
              defaultValue={values.bio}
            />
            <TextField
              style={{ marginTop: "15px" }}
              fullWidth={true}
              label="city"
              onChange={hundleChange("city")}
              defaultValue={values.city}
            />
            <Grid container direction="row" justify='space-between'>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "15px" }}
                onClick={onBack}
              >
                Back
              </Button>
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
      </Grid>
    </>
  );
}
