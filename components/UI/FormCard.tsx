import React, { FC, ReactNode } from "react";
import classes from "../styles/FormCard.module.css";
import { formCardProps } from "../../interfaces";

const FormCard: FC<formCardProps> = (props) => {

  return (
    <section>
      <div  className={classes.container}>
        <h1>{props.heading}</h1>
        <form className={classes.form}>
            {props.children}
        </form>
      </div>
    </section>
  );
};

export default FormCard;
