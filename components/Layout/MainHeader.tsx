import React, { FC } from "react";
import classes from "./MainHeader.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { stateLogin } from "../../interfaces";


const MainHeader: FC = () => {


  const router = useRouter();

  const isLoggedIn = useSelector((state: stateLogin) => state.login.isLoggedIn);

  return (
    <header className={classes.header}>
      <div className={classes.header_Cont}>
        <div className={classes.logo}>NextEvents</div>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <Link className={router.pathname == "/" ? classes.active : classes.link} href={"/"}>Home</Link>
            </li>
            <li>
              <Link className={router.pathname == "/events" ? classes.active : classes.link} href={"/events"}>Events</Link>
            </li>
            {isLoggedIn ? (
              <>
              <li>
                <Link className={router.pathname == "/dashboard" ? classes.active : classes.link} href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link className={classes.link} href={"/logout"}>Logout</Link>
              </li>
              </>
            ) : (
              <li>
                <Link className={router.pathname == "/login" ? classes.active : classes.link} href={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
