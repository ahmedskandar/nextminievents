import React, { FC } from "react";
import Head from "next/head";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { useRouter } from "next/router";
import { childrenProps } from "../../interfaces";


const Layout: FC<childrenProps> = ({ children }) => {
  const router = useRouter();

  const param = router.pathname;

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="All events from various organisations"
        />
        <title>Events for organisations</title>
      </Head>
      <div className="flex-wrapper">
        <MainHeader />
        <main>{children}</main>
        {param !== "/login" && param !== "/dashboard" && <MainFooter />}
      </div>
    </>
  );
};

export default Layout;
