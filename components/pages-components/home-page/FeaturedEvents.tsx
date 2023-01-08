import React, { FC } from "react";
import classes from "../../styles/FeaturedEvents.module.css";
import EventsList from "../../UI/EventsList";
import { useSelector } from "react-redux";
import { state } from "../../../interfaces";


const FeaturedEvents: FC = () => {

  const events = useSelector((state: state) => state.dashboard);

  const featuredEvents = events.filter((event) => event.isFeatured === true);

  return (
    <section>
      <div className={classes.container}>
        <h1>Featured Events</h1>
          <EventsList events={featuredEvents}/>
        </div>
    </section>
  );
};

export default FeaturedEvents;
