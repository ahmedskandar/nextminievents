import { useRouter } from "next/router";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import EventsList from "../../UI/EventsList";
import { state } from "../../../interfaces";
import classes from "./FilterEventsPage.module.css";
import Link from "next/link";

const FilteredEvents: FC = () => {
  const events = useSelector((state: state) => state.dashboard);

  const getFilteredEvents = (dateFilter: { year: number; month: number }) => {
    const { year, month } = dateFilter;
    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });

    return filteredEvents;
  };

  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) return <p className="center">Loading...</p>;

  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    return <p className="center">Wrong filter please try again.</p>;
  }

  const filteredEvents = getFilteredEvents({
    year,
    month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No event found</p>;
  }
const humanReadableDate = new Date(year, month-1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
})
  

  return (
    <div className={classes.container}>
        <div><h1>Events for {humanReadableDate}</h1></div>
      <EventsList events={filteredEvents} />
      <Link className={classes.btn} href={'/events'}>Back to Events</Link>
    </div>
  );
};

export default FilteredEvents;
