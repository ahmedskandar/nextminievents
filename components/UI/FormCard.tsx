import React, { FC, ReactNode } from "react";
import classes from "./FormCard.module.css";

interface props {
    heading: string;
    children: ReactNode;
}

const FormCard: FC<props> = (props) => {

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
