import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Paper, Typography, Button } from "@material-ui/core";

function EventForm({
  cancelFormOpen,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const [state, setState] = useState({
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (state.id) {
      updateEvent(state);
    } else {
      createEvent(state);
    }
  };

  const handleState = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const selectEvt = () => {
    if (selectedEvent !== null) {
      setState({ ...selectedEvent });
    }
  };

  useEffect(() => {
    selectEvt();
  }, []);

  return (
    <>
      <Paper style={{ padding: 20 }}>
        <form>
          <Typography gutterBottom>Event Title</Typography>
          <TextField
            value={state.title}
            label="Event Title"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 15 }}
            onChange={handleState("title")}
          />
          <Typography gutterBottom>Event Date</Typography>
          <TextField
            value={state.date}
            type="date"
            style={{ marginBottom: 10 }}
            variant="outlined"
            fullWidth
            onChange={handleState("date")}
          />
          <Typography gutterBottom>City</Typography>
          <TextField
            value={state.city}
            style={{ marginBottom: 10 }}
            label="City event is taking place"
            variant="outlined"
            fullWidth
            onChange={handleState("city")}
          />
          <Typography gutterBottom>Venue</Typography>
          <TextField
            value={state.venue}
            style={{ marginBottom: 10 }}
            label="Enter Venue of event"
            variant="outlined"
            fullWidth
            onChange={handleState("venue")}
          />
          <Typography gutterBottom>Hosted By</Typography>
          <TextField
            value={state.hostedBy}
            style={{ marginBottom: 20 }}
            label="Enter the name of person hosting"
            variant="outlined"
            fullWidth
            onChange={handleState("hostedBy")}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 10, backgroundColor: "#00008B" }}
            onClick={(evt) => handleSubmit(evt)}
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
