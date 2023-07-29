import React from "react";
import * as classes from "./Points.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const Points = () => {
  return (
    <div className={classes.Points}>
      <div className={classes.Card}>
        <StaticImage
          src="../../../images/products/quick-delivery.png"
          width={80}
        />
        <h5>Quick Delivery</h5>
        <p>
          Elit accumsan tempor sagittis, ultrices vitae at quis. Dui praesent
          enim tincidunt tristique aliquam at velit.
        </p>
      </div>
      <div className={classes.Card}>
        <StaticImage
          src="../../../images/products/quality-assured.png"
          width={80}
        />
        <h5>Quality Assured</h5>
        <p>
          Elit accumsan tempor sagittis, ultrices vitae at quis. Dui praesent
          enim tincidunt tristique aliquam at velit.
        </p>
      </div>
      <div className={classes.Card}>
        <StaticImage
          src="../../../images/products/satisfaction.png"
          width={80}
        />
        <h5>100% Satisfaction</h5>
        <p>
          Elit accumsan tempor sagittis, ultrices vitae at quis. Dui praesent
          enim tincidunt tristique aliquam at velit.
        </p>
      </div>
      <div className={classes.Card}>
        <StaticImage src="../../../images/products/support.png" width={80} />
        <h5>24/7 Support</h5>
        <p>
          Elit accumsan tempor sagittis, ultrices vitae at quis. Dui praesent
          enim tincidunt tristique aliquam at velit.
        </p>
      </div>
    </div>
  );
};

export default Points;
