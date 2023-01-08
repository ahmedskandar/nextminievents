import React, { FC } from "react";
import classes from "../../styles/IconCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faPingPongPaddleBall } from "@fortawesome/free-solid-svg-icons";

interface props {
  name: string;
}

const IconCard: FC<props> = ({ name }) => {
  return (
    <div className={classes.container}>
        {name =='Learn' && <FontAwesomeIcon className={`${classes.icon}`} icon={faChalkboardUser} />}
        {name =='Network' && <FontAwesomeIcon className={`${classes.icon}`} icon={faGlobe} />}
        {name =='Compete' && <FontAwesomeIcon className={`${classes.icon}`} icon={faTrophy} />}
        {name =='Have fun' && <FontAwesomeIcon className={`${classes.icon}`} icon={faPingPongPaddleBall} />}
      <p>{name}</p>
    </div>
  );
};

export default IconCard;
