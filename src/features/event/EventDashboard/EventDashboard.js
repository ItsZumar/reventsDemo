import { Grid, Button } from "@material-ui/core";
import React, { useState } from "react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
  {
    id: 1,
    title: "Trip to Murree",
    date: "2021-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    city: "London, UK",
    venue: "Tower of London, St Katherine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL:
      "https://media.istockphoto.com/photos/asian-boy-picture-id609815548?s=612x612",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL:
          "https://media.istockphoto.com/photos/asian-boy-picture-id609815548?s=612x612",
      },
      {
        id: "a",
        name: "Bob",
        photoURL:
          "https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png",
      },
    ],
  },
  {
    id: 1,
    title: "Trip to Murree",
    date: "2021-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    city: "London, UK",
    venue: "Tower of London, St Katherine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL:
      "https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL:
          "https://media.istockphoto.com/photos/asian-boy-picture-id609815548?s=612x612",
      },
      {
        id: "a",
        name: "Bob",
        photoURL:
          "https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png",
      },
    ],
  },
];

function EventDashboard() {
  var [events, setEvents] = useState(eventsFromDashboard);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    setEvents([...events, newEvent]);
    setIsOpen(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <EventList events={events} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: 20, backgroundColor: "#00008B" }}
          onClick={handleIsOpenToggle}
        >
          Create Event
        </Button>
        {isOpen && (
          <EventForm
            createEvent={handleCreateEvent}
            cancelFormOpen={handleIsOpenToggle}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default EventDashboard;
