import React, { FC, useRef, useState } from "react";
import { loginActions } from "../../../store/login-slice";
import FormCard from "../../UI/FormCard";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";

const Form: FC = () => {
  const dispatch = useDispatch();

  interface state {
    login: {
      isLoggedIn: boolean;
      username: string;
      password: number;
    };
  }

  const savedUsername = useSelector((state: state) => state.login.username);
  const savedPassword = useSelector((state: state) => state.login.password);

  const [errorState, setErrorState] = useState("");

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (username?.trim() === "" || password?.trim() === "") {
      setErrorState("Please fill in the input fields...");

      return;
    }

    const numPassword = +password!;

    if (username !== savedUsername || numPassword !== savedPassword) {
      setErrorState("Username and password combination is wrong");

      return;
    }

    setErrorState("");

    dispatch(loginActions.login());
    Router.replace("/");
  };

  return (
    <FormCard heading="Login">
      <input ref={usernameRef} type="text" placeholder="Enter username*" />
      <br />
      <input ref={passwordRef} type="text" placeholder="Enter password*" />
      <br />
      <input onClick={onSubmitHandler} type="submit" value="Login" />
      <div style={{fontSize: 'small'}}>Username = 'Ahmed' <br /> Password = 123</div>
      {errorState && <div className="red">{errorState}</div>}
    </FormCard>
  );
};

export default Form;
