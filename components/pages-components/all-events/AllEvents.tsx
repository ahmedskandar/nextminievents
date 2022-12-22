import React, { FC } from "react";
import classes from "./AllEvents.module.css";
import EventsList from "../../UI/EventsList";
import { useSelector } from "react-redux";
import { state } from "../../../interfaces";
import FilterForm from "./FilterForm";
import { useRouter } from "next/router";


const AllEvents: FC = () => {

  const router = useRouter();

  const events = useSelector((state: state) => state.dashboard);

  const filterEvents = (year: string, month: string) => {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <section className={classes.container}>
      <h1>All Events</h1>
      <FilterForm onFilter={filterEvents}/>
      <EventsList events={events} />
    </section>
  );
};

export default AllEvents;
