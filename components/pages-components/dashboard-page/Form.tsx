import React, { FC, useEffect, useRef, useState } from "react";
import FormCard from "../../UI/FormCard";
import { useDispatch, useSelector } from "react-redux";
import { dashboardAction } from "../../../store/dashboard-slice";
import { stateLogin } from "../../../interfaces";
import Router from "next/router";

const Form: FC = () => {
  const isLoggedIn = useSelector((state: stateLogin) => state.login.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      Router.push("/");
    }

    return;
  }, [isLoggedIn]);

  const dispatch = useDispatch();

  const [errorState, setErrorState] = useState("");

  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const date = dateRef.current?.value;
    const address = addressRef.current?.value;
    const imagePath = imageRef.current?.value;
    const desc = descRef.current?.value;

    if (
      title?.trim() === "" ||
      date?.trim() === "" ||
      address?.trim() === "" ||
      imagePath?.trim() === "" ||
      desc?.trim() === ""
    ) {
      setErrorState("Please fill in all input fields");
      return;
    }

    if (!imagePath?.startsWith("/images/")) {
      setErrorState("Image path must start with /images/");
      return;
    }

    const array = [true, false];

    const randNum = Math.floor(Math.random() * 2);

    const randValue = array[randNum];

    dispatch(
      dashboardAction.addEvent({
        id: Math.floor(Math.random() * 100),
        title,
        date,
        address,
        imagePath,
        isFeatured: randValue,
        desc,
      })
    );

    setErrorState("");

    if (
      titleRef.current &&
      dateRef.current &&
      addressRef.current &&
      imageRef.current &&
      descRef.current
    ) {
      titleRef.current.value = "";
      dateRef.current.value = "";
      addressRef.current.value = "";
      imageRef.current.value = "";
      descRef.current.value = "";
    }

    alert("Successfully added an event!");
  };

  return (
    <FormCard heading="Add Event">
      <input type="text" ref={titleRef} placeholder="Enter event title" />
      <br />
      <input type="date" ref={dateRef} />
      <br />
      <input type="text" ref={addressRef} placeholder="Enter event address" />
      <br />
      <input
        type="text"
        ref={imageRef}
        placeholder="Enter event image path (URL)"
      />
      <br />
      <textarea
        ref={descRef}
        className="textarea"
        placeholder="Enter event description"
      ></textarea>
      <br />
      <input type="submit" onClick={onSubmitHandler} />
      {errorState && <div className="red">{errorState}</div>}
    </FormCard>
  );
};

export default Form;
