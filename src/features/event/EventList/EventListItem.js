import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from "@material-ui/core";
import React from "react";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EventListAttendee from "./EventListAttendee";
import eventsData from "../../../DummyData/Events";

function EventListItem({ event }) {
  return (
    <>
      <Card style={{ marginBottom: 30 }}>
        <CardContent style={{ display: "flex" }}>
          {/* <EventListAttendee /> */}

          <img
            src={event.hostPhotoURL}
            alt="@"
            style={{
              height: 90,
              width: 90,
              borderRadius: "50%",
              marginRight: "10px 20px",
            }}
          />
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "18px",
            }}
          >
            {eventsData.map((el) => (
              <Typography>{el.title}</Typography>
            ))}
            <Typography variant="h6">{event.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Hosted by <Link>{event.hostedBy}</Link>
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardContent style={{ display: "flex", alignItems: "center" }}>
          <ScheduleIcon style={{ marginRight: 5 }} /> {event.date} |
          <LocationOnIcon style={{ marginRight: 5, marginLeft: 5 }} />{" "}
          {event.venue}
        </CardContent>
        <Divider />
        <CardContent style={{ display: "flex", backgroundColor: "#F5F5F5" }}>
          {event.attendees.map((attendee, index) => (
            <EventListAttendee key={index} attendee={attendee} />
          ))}
        </CardContent>
        <Divider />
        <CardContent style={{ display: "Flex" }}>
          <Typography style={{ flexGrow: 1 }}>{event.description}</Typography>
          <Button
            size="small"
            style={{
              backgroundColor: "#00008B",
              color: "whitesmoke",
              fontWeight: 600,
            }}
          >
            View
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default EventListItem;
