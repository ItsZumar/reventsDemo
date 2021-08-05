import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography, Button } from "@material-ui/core";

function EventForm({ cancelFormOpen, createEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [venue, setVenue] = useState("");
  const [host, setHost] = useState("");

  const handleSubmit = () => {
    console.log({ title, date, city, venue, host });
    createEvent({ title, date, city, venue, host });
  };
  return (
    <>
      <Paper style={{ padding: 20 }}>
        <form>
          <Typography gutterBottom>Event Title</Typography>
          <TextField
            label="Event Title"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 15 }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Typography gutterBottom>Event Date</Typography>
          <TextField
            type="date"
            style={{ marginBottom: 10 }}
            variant="outlined"
            fullWidth
            onChange={(e) => setDate(e.target.value)}
          />
          <Typography gutterBottom>City</Typography>
          <TextField
            style={{ marginBottom: 10 }}
            label="City event is taking place"
            variant="outlined"
            fullWidth
            onChange={(e) => setCity(e.target.value)}
          />
          <Typography gutterBottom>Venue</Typography>
          <TextField
            style={{ marginBottom: 10 }}
            label="Enter Venue of event"
            variant="outlined"
            fullWidth
            onChange={(e) => setVenue(e.target.value)}
          />
          <Typography gutterBottom>Hosted By</Typography>
          <TextField
            style={{ marginBottom: 20 }}
            label="Enter the name of person hosting"
            variant="outlined"
            fullWidth
            onChange={(e) => setHost(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 10, backgroundColor: "#00008B" }}
            onClick={() => handleSubmit()}
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
