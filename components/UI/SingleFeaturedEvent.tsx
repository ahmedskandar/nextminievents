import Image from "next/image";
import React, { FC } from "react";
import classes from "./SingleFeaturedEvent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { props } from "../../interfaces";



const SingleFeaturedEvent: FC<props> = ({ id, title, date, address, imagePath}) => {
  return (
    <li className={classes.list}>
      <div className={classes.card}>
        <div className={classes.left}>
          <Image
            className={classes.image}
            src={imagePath}
            alt={"Image showing event picture"}
            width={500}
            height={500}
          />
        </div>
        <div className={classes.right}>
          <h4 className={classes.heading}>{title}</h4>
          <div>
            <FontAwesomeIcon className={classes.icon} icon={faCalendar} />
            <time className={classes.time}>{date}</time>
          </div>
          <div>
            <FontAwesomeIcon className={classes.icon} icon={faLocationDot} />
            <address className={classes.address}>{address}</address>
          </div>
          <div className={classes.linkCont}>
            <Link className={classes.link} href={`/events/${id}`}>Explore more</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleFeaturedEvent;
