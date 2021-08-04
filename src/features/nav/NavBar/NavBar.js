import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Box, Grid, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    padding: "0 0 0 180px",
    backgroundImage: `linear-gradient(to right, #00008B, #3B9C9C)`,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Grid container>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          <Grid item xs={12} md={6}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ marginRight: 10 }}>Re-vents</Typography>
              <Link style={{ marginRight: 10 }} color="inherit">
                Events
              </Link>
              <Button color="inherit" variant="outlined" size="small">
                Create Event
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
              color="inherit"
              style={{ marginRight: 10 }}
            >
              Login
            </Button>
            <Button variant="outlined" color="inherit">
              Sign Out
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
export default NavBar;
