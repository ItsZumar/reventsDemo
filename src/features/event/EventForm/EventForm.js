import React from "react";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography, Button } from "@material-ui/core";

function EventForm({ cancelFormOpen }) {
  return (
    <>
      <Paper style={{ padding: 20 }}>
        <form>
          <Typography gutterBottom>Event Title</Typography>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 10 }}
          />
          <Typography gutterBottom>Event Date</Typography>
          <TextField
            type="date"
            style={{ marginBottom: 10 }}
            variant="outlined"
            fullWidth
          />
          <Typography gutterBottom>City</Typography>
          <TextField
            style={{ marginBottom: 10 }}
            label="City event is taking place"
            variant="outlined"
            fullWidth
          />
          <Typography gutterBottom>Venue</Typography>
          <TextField
            style={{ marginBottom: 10 }}
            label="Enter Venue of event"
            variant="outlined"
            fullWidth
          />
          <Typography gutterBottom>Hosted By</Typography>
          <TextField
            style={{ marginBottom: 20 }}
            label="Enter the name of person hosting"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 10, backgroundColor: "#00008B" }}
          >
            Submit
          </Button>
          <Button variant="contained" color="inherit" onClick={cancelFormOpen}>
            Cancel
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default EventForm;
