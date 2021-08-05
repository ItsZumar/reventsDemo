import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events, selectEvent }) {
  return (
    <div>
      {events.map((event, index) => (
        <EventListItem key={index} event={event} selectEvent={selectEvent} />
      ))}
    </div>
  );
}

export default EventList;
