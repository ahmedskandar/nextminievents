import React, { FC } from "react";
import classes from "../../styles/Hero.module.css";

const Hero: FC = () => {
  return (
    <div className={classes.img}>
      <div>
        <p className={classes.introText}><span>Welcome</span> <br /> to <br /> Next Events</p>
      </div>
    </div>
  );
};

export default Hero;
