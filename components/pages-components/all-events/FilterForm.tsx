import React, { FC, useRef } from "react";
import { filterState } from "../../../interfaces";
import classes from "./FilterForm.module.css";

const FilterForm: FC<filterState> = (props) => {

  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {

    e.preventDefault();
    const year = yearRef.current!.value;
    const month = monthRef.current!.value;

    props.onFilter(year, month);

  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.container}>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <input type="submit" value="Search" />
      </div>
    </form>
  );
};

export default FilterForm;
