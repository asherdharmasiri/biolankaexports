import React from "react";
import * as classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Container}>
        <h1>
          Contact Us or <span>Get a Quotation</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          adipisci, eius eum rem ea excepturi tenetur nulla accusantium,
          consequatur, praesentium sit facere incidunt nisi debitis illo sint.
          Commodi, est iste!
        </p>
      </div>
    </div>
  );
};

export default Header;
