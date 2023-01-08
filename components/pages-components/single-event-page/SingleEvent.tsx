import Image from "next/image";
import React, { FC } from "react";
import classes from "./SingleEvent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { state } from "../../../interfaces";

const SingleEvent: FC = () => {

  const router = useRouter();
  const eventsId = router.query.eventsId;

  const events = useSelector((state: state) => state.dashboard);

  const specificEvent = events.find((event) => event.id === +eventsId!);

  if(!specificEvent) {
    return <div className="center">Loading</div>
  }


  return (
    <section>
      <div className={classes.container}>
        <h1>{specificEvent!.title}</h1>
        <Image
          className={classes.image}
          src={specificEvent!.imagePath}
          width={1500}
          height={1000}
          alt={`Image showing ${specificEvent!.title}`}
        />
        <div className={classes.iconCont}>
          <div>
            <FontAwesomeIcon className={classes.icon} icon={faCalendar} />
            <time className={classes.time}>{specificEvent!.date}</time>
          </div>
          <div>
            <FontAwesomeIcon className={classes.icon} icon={faLocationDot} />
            <address className={classes.address}>
            {specificEvent!.address}
            </address>
          </div>
        </div>
        <div className={classes.desc}>
          {specificEvent!.desc}
        </div>
      </div>
    </section>
  );
};

export default SingleEvent;
