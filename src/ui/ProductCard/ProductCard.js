import React from "react";
import * as classes from "./ProductCard.module.scss";
import {getImage, StaticImage, GatsbyImage} from "gatsby-plugin-image";
import Button from "../Button/Button";

const ProductCard = ({ title, image }) => {
  return (
    <div className={classes.ProductCard}>
      <div className={classes.ImageContainer}>
          {image && image}
      </div>
        <div>
            <p>{title}</p>
            <Button outline>Get Quotation</Button>
        </div>

    </div>
  );
};

export default ProductCard;
