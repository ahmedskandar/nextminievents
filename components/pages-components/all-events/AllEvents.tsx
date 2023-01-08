import React, { FC } from "react";
import classes from "../../styles/AllEvents.module.css";
import EventsList from "../../UI/EventsList";
import { useSelector } from "react-redux";
import { state } from "../../../interfaces";
import FilterForm from "./FilterForm";


const AllEvents: FC = () => {

  const events = useSelector((state: state) => state.dashboard);

  return (
    <section className={classes.container}>
      <h1>All Events</h1>
      <FilterForm/>
      <EventsList events={events} />
    </section>
  );
};

export default AllEvents;
