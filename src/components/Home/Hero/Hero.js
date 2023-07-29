import React from "react";
import * as classes from "./Hero.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../ui/Button/Button";

const Hero = () => {
  return (
    <section className={classes.HeroSection}>
      <div className={classes.Backdrop}>
        <div className={classes.Content}>
          <h1>Sri Lanka’s #1 Organic Products Supplier</h1>
          <p>Exporting Premium Quality Organic Products Worldwide</p>
          <div className={classes.SearchField}>
            <input type="search" placeholder="Search 35+ products..." />
            <Button secondary>Search</Button>
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <StaticImage src="../../../images/hero-image.png" width={700} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
