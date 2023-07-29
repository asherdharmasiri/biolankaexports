import React from "react";
import * as classes from "./HandPicked.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const HandPicked = () => {
  return (
    <div className={classes.HandPicked}>
      <h1>
        Handpicked from the <span>Pristine Landscapes</span>
      </h1>
      <div className={classes.Container}>
        <div>
          <StaticImage
            src="../../../images/products/traditional.png"
            width={360}
          />
        </div>
        <div>
          <StaticImage
            src="../../../images/products/map-green.png"
            width={350}
          />
        </div>
        <div>
          <StaticImage
            src="../../../images/products/non-traditional.png"
            width={360}
          />
        </div>
      </div>
    </div>
  );
};

export default HandPicked;
