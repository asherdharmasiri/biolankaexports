import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className={classes.MainContainer}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
