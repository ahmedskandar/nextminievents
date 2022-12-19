// import styles from '../styles/Home.module.css'

import React, { FC } from "react";
import Hero from "../components/pages-components/home-page/Hero";
import Summary from "../components/pages-components/home-page/Summary";
import Values from "../components/pages-components/home-page/Values";
import FeaturedEvents from "../components/pages-components/home-page/FeaturedEvents";

const FeaturedEventsPage: FC = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Values />
      <FeaturedEvents/>
    </>
  );
};

export default FeaturedEventsPage;
