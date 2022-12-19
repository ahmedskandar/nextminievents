import React, { FC } from "react";
import SingleFeaturedEvent from "./SingleFeaturedEvent";
import classes from "./EventsList.module.css";
import { state2 } from "../../interfaces";

const EventsList: FC<state2> = (props) => {
  const eventsList = props.events.map((event) => (
    <SingleFeaturedEvent
      key={event.id}
      id={event.id}
      date={event.date}
      title={event.title}
      imagePath={event.imagePath}
      address={event.address}
    />
  ));

  return (
    <div className={classes.cardCont}>
      <ul>{eventsList}</ul>
    </div>
  );
};

export default EventsList;
