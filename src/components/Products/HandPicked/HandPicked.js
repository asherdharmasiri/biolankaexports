import React, { useState } from "react";
import * as classes from "./HandPicked.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import TraditionalProductsModal from "../TraditionalProductsModal/TraditionalProductsModal";
import NonTraditionalProductsModal from "../NonTraditionalProductsModal/NonTraditionalProductsModal";

const HandPicked = () => {
  const [traditionalProductsModalOpen, setTraditionalProductsOpen] =
    useState(false);
  const [nonTraditionalProductsModalOpen, setNonTraditionalProductsOpen] =
    useState(false);

  const onOpenTraditionalProductsModal = () => {
    setTraditionalProductsOpen(true);
  };

  const onCloseTraditionalProductsModal = () => {
    setTraditionalProductsOpen(false);
  };

  const onOpenNonTraditionalProductsModal = () => {
    setNonTraditionalProductsOpen(true);
  };

  const onCloseNonTraditionalProductsModal = () => {
    setNonTraditionalProductsOpen(false);
  };

  return (
    <div className={classes.HandPicked}>
      <h1>
        Handpicked from the <span>Pristine Landscapes</span>
      </h1>
      <div className={classes.Container}>
        <div onClick={onOpenTraditionalProductsModal}>
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
        <div onClick={onOpenNonTraditionalProductsModal}>
          <StaticImage
            src="../../../images/products/non-traditional.png"
            width={360}
          />
        </div>
      </div>
      <TraditionalProductsModal
        open={traditionalProductsModalOpen}
        onClose={onCloseTraditionalProductsModal}
      />
      <NonTraditionalProductsModal
        open={nonTraditionalProductsModalOpen}
        onClose={onCloseNonTraditionalProductsModal}
      />
    </div>
  );
};

export default HandPicked;
