import React from "react";
import * as classes from "./NonTraditionalProductsModal.module.scss";
import "react-responsive-modal/styles.css";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../ui/Button/Button";

const NonTraditionalProductsModal = ({ open, onClose }) => {
  return (
    <Modal isOpen={open} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent>
        <ModalBody className={classes.ModalBody}>
          <div className={classes.Header}>
            <h2>Non-Traditional Products</h2>
            <p>
              Unearth the brilliance of Sri Lankan gems, where nature's artistry
              meets exquisite craftsmanship for timeless beauty.
            </p>
          </div>
          <div className={classes.ProductContainer}>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/diamonds.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/apparel.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/food.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/ayurvedic.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/flowers.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/ceramic.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/chemicals.png"
                width={250}
              />
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/fish.png"
                width={250}
              />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NonTraditionalProductsModal;
