import React, { FC } from "react";
import classes from "../../styles/Values.module.css";
import IconCard from "./IconCard";

const Values: FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <IconCard name="Learn"/>
        <IconCard name="Network"/>
        <IconCard name="Compete"/>
        <IconCard name="Have fun"/>
      </div>
    </section>
  );
};

export default Values;
