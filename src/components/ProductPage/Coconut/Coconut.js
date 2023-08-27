import React from "react";
import * as classes from "./Coconut.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import ProductCard from "../../../ui/ProductCard/ProductCard";

const Coconut = () => {
  return (
    <div>
      <div>
        <StaticImage src="../../../images/coconut-strip.png" width={1920} />
      </div>
      <div className={classes.Sub}>
        <div className={classes.SubHeading}>
          <h2>Kernal Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            molestiae laborum suscipit repellendus qui dicta porro, impedit
          </p>
        </div>
        <div className={classes.SubProduct}>
          <ProductCard title="Desiccated Coconut" />
          <ProductCard title="Coconut Oil" />
          <ProductCard title="Copra" />
          <ProductCard title="Defatted Coconut" />
          <ProductCard title="Coconut Milk Powder" />
          <ProductCard title="Coconut Milk" />
          <ProductCard title="Coconut Vinegar" />
          <ProductCard title="Coconut Butter" />
          <ProductCard title="King Coconut Water" />
          <ProductCard title="Coconut Flour" />
          <ProductCard title="Low Fat DC" />
          <ProductCard title="MCT Oil" />
        </div>
      </div>
      <div className={classes.Sub}>
        <div className={classes.SubHeading}>
          <h2>Semi Processed Nuts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            molestiae laborum suscipit repellendus qui dicta porro, impedit
          </p>
        </div>
        <div className={classes.SubProduct}>
          <ProductCard title="Coconut Wihout Husk" />
          <ProductCard title="Coconut Semi Husked" />
        </div>
      </div>
      <div className={classes.Sub}>
        <div className={classes.SubHeading}>
          <h2>Non Kernal Products - Raw</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            molestiae laborum suscipit repellendus qui dicta porro, impedit
          </p>
        </div>
        <div className={classes.SubProduct}>
          <ProductCard title="Omat Fiber" />
          <ProductCard title="Mattress Fiber" />
          <ProductCard title="Twisted Fiber" />
          <ProductCard title="Fiber Pith/Dust" />
          <ProductCard title="Other" />
        </div>
      </div>
      <div className={classes.Sub}>
        <div className={classes.SubHeading}>
          <h2>Non Kernal Products - Value Added</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            molestiae laborum suscipit repellendus qui dicta porro, impedit
          </p>
        </div>
        <div className={classes.SubProduct}>
          <ProductCard title="Coir Yam" />
          <ProductCard title="Coir Twine" />
          <ProductCard title="Moulded Coir Products" />
          <ProductCard title="Rubberized Coir Products" />
          <ProductCard title="Carpets, Mats & Rugs" />
          <ProductCard title="Ekel Brooms" />
          <ProductCard title="Compressed Husk Chips" />
          <ProductCard title="Ornamental Products" />
          <ProductCard title="Tawashi Brushes" />
          <ProductCard title="Other Value added husk based products" />
        </div>
      </div>
      <div className={classes.Sub}>
        <div className={classes.SubHeading}>
          <h2>Non Kernal Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            molestiae laborum suscipit repellendus qui dicta porro, impedit
          </p>
        </div>
        <div className={classes.SubProduct}>
          <ProductCard title="Coconut Shell Pieces" />
          <ProductCard title="Coconut Shell Powder" />
          <ProductCard title="Coconut Ekels" />
          <ProductCard title="Activated Carbon" />
        </div>
      </div>
      <div className={classes.Sub}>
        <div className={classes.SubHeading}>
          <h2>Other Coconut Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime unde
            molestiae laborum suscipit repellendus qui dicta porro, impedit
          </p>
        </div>
        <div className={classes.SubProduct}>
          <ProductCard title="Coconut Wood" />
          <ProductCard title="Matured Coconut Leaves & Others" />
        </div>
      </div>
    </div>
  );
};

export default Coconut;
