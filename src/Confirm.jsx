import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { Button } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Confirm({ values, prevStep }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const onBack = (e) => {
    e.preventDefault();
    prevStep();
  };
  const onConfirm = (e) => {
    e.preventDefault();
    setOpen(true);
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
                Confirm
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid direction="row" container justify="center" alignItems="center">
          <Grid container direction="column" item xs={4} justify="center">
            <List>
              <ListItem button>
                <ListItemText primary={`First name : ${values.firstName}`} />
              </ListItem>
              <hr />
              <ListItem button>
                <ListItemText primary={`Last name : ${values.lastName}`} />
              </ListItem>
              <hr />
              <ListItem button>
                <ListItemText primary={`Email : ${values.email}`} />
              </ListItem>
              <hr />
              <ListItem button>
                <ListItemText primary={`Occupation : ${values.ocuppation}`} />
              </ListItem>
              <hr />
              <ListItem button>
                <ListItemText primary={`city : ${values.city}`} />
              </ListItem>
              <hr />
              <ListItem button>
                <ListItemText primary={`bio : ${values.bio}`} />
              </ListItem>
            </List>
            <Grid container direction="row" justify="space-between">
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
                onClick={onConfirm}
              >
                Confirm
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Success"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    thanks you for submit to our services sir.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    dismiss
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
