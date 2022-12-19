import React, { FC } from "react";
import classes from "./Summary.module.css";
import Image from "next/image";

const Summary: FC = () => {
  return (
    <section className={classes.section}>
        <div className={classes.container}>
            <div className={classes.text}>
                Next Events is a website that consists of all technology related events that is about to be undertaken by various speakers.
            </div>
            <div>
                <Image className={classes.image} src={'/images/laptop2.avif'} height={500} width={550} alt={'An image showing a laptop'}/>
            </div>
        </div>
    </section>
  );
};

export default Summary;