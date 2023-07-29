import React from "react";
import * as classes from "./HandPicked.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const HandPicked = () => {
  return (
    <section className={classes.HandPicked}>
      <div className={classes.Left}>
        <div className={classes.TextContent}>
          <h2>
            Handpicked from the <br /> <span>Pristine Landscapes</span>
          </h2>
          <ul>
            <li>
              <p>Kandy</p>
            </li>
            <li>
              <p>Kurunegala</p>
            </li>
            <li>
              <p>Hambanthota</p>
            </li>
            <li>
              <p>Rathnapura</p>
            </li>
          </ul>
        </div>
        <div className={classes.ImageContainer}>
          <StaticImage src="../../../images/lanka-map.png" width={300} />
        </div>
      </div>
      <div className={classes.Right}>
        <p className={classes.Desc}>
          Immerse yourself in the natural wonders of this tropical paradise as
          we bring you a diverse range of premium quality organic goods. From
          fragrant spices and aromatic teas to exotic fruits and nourishing
          botanicals, our products are meticulously cultivated and harvested in
          harmony with nature's rhythms. We are committed to preserving the
          integrity of our environment while delivering the highest standards of
          quality and sustainability.
        </p>

        <div className={classes.Points}>
          <div>
            <span>100%</span>
            <p>Authentic Organic Brand</p>
          </div>
          <div>
            <span>60+</span>
            <p>Customers Around the Globe</p>
          </div>
          <div>
            <span>30+</span>
            <p>Products & Raw Materials</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HandPicked;
