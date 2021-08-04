import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events }) {
  return (
    <div>
      {events.map((event, index) => (
        <EventListItem key={index} event={event} />
      ))}
    </div>
  );
}

export default EventList;
