import React from "react";
import * as classes from "./ProductSection.module.scss";
import Button from "../../../ui/Button/Button";
import { StaticImage } from "gatsby-plugin-image";

const ProductSection = () => {
  return (
    <section className={classes.ProductSection}>
      <div className={classes.NaturesFinest}>
        <h2>Unveiling Nature's Finest</h2>
        <p>
          Unearth the brilliance of Sri Lankan gems, where nature's artistry
          meets exquisite craftsmanship for timeless beauty.
        </p>
        <div className={classes.ProductCardContainer}>
          <div className={classes.ProductCard}>
            <div className={classes.ProductImage}>
              <StaticImage src="../../../images/home/coconut.png" width={250} />
            </div>
            <span>Coconut</span>
            <p>Pure Sri Lankan coconuts, nature's bliss in every sense.</p>
            <Button primary>Explore Products</Button>
          </div>
          <div className={classes.ProductCard}>
            <div className={classes.ProductImage}>
              <StaticImage src="../../../images/home/rubber.png" width={250} />
            </div>
            <span>Rubber</span>
            <p>Premium Sri Lankan rubber, epitome of quality + reliability.</p>
            <Button primary>Explore Products</Button>
          </div>
          <div className={classes.ProductCard}>
            <div className={classes.ProductImage}>
              <StaticImage src="../../../images/home/tea.png" width={250} />
            </div>
            <span>Tea</span>
            <p>
              Savor essence of Sri Lankan tea, a sensory delight like no other.
            </p>
            <Button primary>Explore Products</Button>
          </div>
          <div className={classes.ProductCard}>
            <div className={classes.ProductImage}>
              <StaticImage src="../../../images/home/gems.png" width={250} />
            </div>
            <span>Gems</span>
            <p>Captivating Lankan gems, nature's masterpiece.</p>
            <Button primary>Explore Products</Button>
          </div>
        </div>
      </div>
      <div className={classes.MoreOrganicDelights}>
        <div className={classes.Title}>
          <h2>More Organic Delights</h2>
          <Button outline>View All</Button>
        </div>
        <div className={classes.ProductSwiper}>
          <div className={classes.Product}>
            <div className={classes.ImageContainer}>
              <StaticImage
                src="../../../images/home/coconut-husk.png"
                width={350}
              />
            </div>
            <span>Coconut without Husk</span>
            <p>Pure Sri Lankan coconuts, nature's bliss in every sense.</p>
            <Button inverse>Explore Products</Button>
          </div>
          <div className={classes.Product}>
            <div className={classes.ImageContainer}>
              <StaticImage
                src="../../../images/home/mattress-fiber.png"
                width={350}
              />
            </div>
            <span>Mattress Fiber</span>
            <p>Pure Sri Lankan coconuts, nature's bliss in every sense.</p>
            <Button inverse>Explore Products</Button>
          </div>
          <div className={classes.Product}>
            <div className={classes.ImageContainer}>
              <StaticImage
                src="../../../images/home/fiber-pith.png"
                width={350}
              />
            </div>
            <span>Fiber Pith/Dust</span>
            <p>Pure Sri Lankan coconuts, nature's bliss in every sense.</p>
            <Button inverse>Explore Products</Button>
          </div>
          <div className={classes.Product}>
            <div className={classes.ImageContainer}>
              <StaticImage
                src="../../../images/home/coir-twine.png"
                width={350}
              />
            </div>
            <span>Coir Twine</span>
            <p>Pure Sri Lankan coconuts, nature's bliss in every sense.</p>
            <Button inverse>Explore Products</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
