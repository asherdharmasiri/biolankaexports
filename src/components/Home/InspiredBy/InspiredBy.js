import React from "react";
import * as classes from "./InspiredBy.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const InspiredBy = () => {
  return (
    <section className={classes.InspiredBy}>
      <div className={classes.Left}>
        <h2>
          Inspired by traditional <span>knowledge and nature</span>
        </h2>
        <div className={classes.ImageContainer}>
          <StaticImage src="../../../images/home/herbs-image.png" width={800} />
        </div>
      </div>
      <div className={classes.Right}>
        <div className={classes.Point}>
          <StaticImage
            src="../../../images/home/safely-packed.png"
            width={85}
          />
          <div className={classes.Content}>
            <span>Safely Packed</span>
            <p>
              Elit accumsan tempor sagittis, ultrices vitae at quis. Dui
              praesent enim tincidunt tristique aliquam at velit.
            </p>
          </div>
        </div>
        <div className={classes.Point}>
          <StaticImage
            src="../../../images/home/humidity-sealed.png"
            width={85}
          />
          <div className={classes.Content}>
            <span>Humidity Sealed</span>
            <p>
              Elit accumsan tempor sagittis, ultrices vitae at quis. Dui
              praesent enim tincidunt tristique aliquam at velit.
            </p>
          </div>
        </div>
        <div className={classes.Point}>
          <StaticImage
            src="../../../images/home/free-shipping.png"
            width={85}
          />
          <div className={classes.Content}>
            <span>Free Shipping</span>
            <p>
              Elit accumsan tempor sagittis, ultrices vitae at quis. Dui
              praesent enim tincidunt tristique aliquam at velit.
            </p>
          </div>
        </div>
        <div className={classes.Point}>
          <StaticImage
            src="../../../images/home/customer-support.png"
            width={85}
          />
          <div className={classes.Content}>
            <span>Customer Support</span>
            <p>
              Elit accumsan tempor sagittis, ultrices vitae at quis. Dui
              praesent enim tincidunt tristique aliquam at velit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspiredBy;
