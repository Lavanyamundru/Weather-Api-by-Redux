import React, { useState } from "react";
import dynamic from "next/dynamic";
// import Dropbox from "./CreateAccountt/Dropbox";
// import Account from "./CreateAccountt/Account";
// import Login1 from "./CreateAccountt/Login";
import Login2 from "./CreateAccountt/Login2";
const Nav = dynamic(() => import("./CreateAccountt/Nav"));
const Footer = dynamic(() => import("./CreateAccountt/Footer"));
const Section = dynamic(() => import("./CreateAccountt/Section"));

const index = () => {
  return (
    <>
      {/* <Nav />
      <Section />
      <Footer /> */}
      <Login2/>
    </>
  );
};

export default index;
