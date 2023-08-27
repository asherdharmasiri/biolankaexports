import React from "react";
import * as classes from "./ProductCard.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../Button/Button";

const ProductCard = ({ title, imageUrl }) => {
  return (
    <div className={classes.ProductCard}>
      <div className={classes.ImageContainer}>
        <StaticImage src="../../images/placeholder.webp" height={200} />
      </div>
      <p>{title}</p>
      <Button outline>Get Quotation</Button>
    </div>
  );
};

export default ProductCard;
