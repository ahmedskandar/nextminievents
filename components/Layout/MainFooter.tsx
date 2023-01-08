import React, { FC } from "react";
import classes from '../styles/MainFooter.module.css'

const MainFooter: FC = () => {
  return <footer className={classes.footer}>
    <div>&copy; Next Events 2022. All rights reserved.</div>
  </footer>;
};

export default MainFooter;
