import React from "react";
import * as classes from "./TraditionalProductsModal.module.scss";
import "react-responsive-modal/styles.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../ui/Button/Button";

const TraditionalProductsModal = ({ open, onClose }) => {
  return (
    <Modal isOpen={open} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
      <ModalContent>
        <ModalBody className={classes.ModalBody}>
          <div className={classes.Header}>
            <h2>Traditional Products</h2>
            <p>
              Unearth the brilliance of Sri Lankan gems, where nature's artistry
              meets exquisite craftsmanship for timeless beauty.
            </p>
          </div>
          <div className={classes.ProductContainer}>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/spices.png"
                width={200}
              />
              <span>Spices</span>
              <p>Captivating Lankan spices, nature's masterpiece.</p>
              <Button primary to="/products/spices">
                Explore Products
              </Button>
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/coconut.png"
                width={200}
              />
              <span>Coconut</span>
              <p>Pure Sri Lankan coconuts, nature's bliss in every sense.</p>
              <Button primary to="/products/coconut">
                Explore Products
              </Button>
            </div>
            <div className={classes.Card}>
              <StaticImage
                src="../../../images/products/rubber.png"
                width={200}
              />
              <span>Rubber</span>
              <p>
                Premium Sri Lankan rubber, epitome of quality + reliability.
              </p>
              <Button primary to="/products/rubber">
                Explore Products
              </Button>
            </div>
            <div className={classes.Card}>
              <StaticImage src="../../../images/products/tea.png" width={200} />
              <span>Tea</span>
              <p>
                Savor essence of Sri Lankan tea, a sensory delight like no
                other.
              </p>
              <Button primary to="/products/tea">
                Explore Products
              </Button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className={classes.ModalFooter}>
          <Button outline onClick={() => onClose()}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TraditionalProductsModal;
