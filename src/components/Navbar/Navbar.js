import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as classes from "./Navbar.module.scss";
import Button from "../../ui/Button/Button";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const openDrawer = () => {
    setIsOpen(true);
  };

  return (
    <nav className={classes.Navbar}>
      <StaticImage src="../../images/logo.png" alt="logo" />
      <ul>
        <li>
          <Link
            to="/"
            activeClassName={classes.ActiveLink}
            className={classes.Link}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/company" className={classes.Link}>
            Company
          </Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/achievements" className={classes.Link}>
            Achievements
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.Link}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={classes.Right}>
        <Link
          to="/products"
          activeClassName={classes.ActiveLink}
          className={classes.Link}
        >
          Products
        </Link>
        <Button primary>
          <Link to="/contact-us">Get a Quotation</Link>
        </Button>
      </div>
      <div className={classes.MobileRight}>
        <Button primary>
          <Link to="/contact-us">Get a Quot.</Link>
        </Button>
        <div onClick={() => openDrawer()}>
          <HiOutlineMenuAlt3 />
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <div className={classes.DrawerContent}>
            <DrawerHeader className={classes.DrawerHeader}>
              <p>Menu</p>
              <button onClick={() => onClose()}>
                <MdOutlineClose />
              </button>
            </DrawerHeader>
            <div className={classes.DrawerContentItems}>
              <ul>
                <li>
                  <Link
                    to="/products"
                    activeClassName={classes.ActiveLink}
                    className={classes.Link}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    activeClassName={classes.ActiveLink}
                    className={classes.Link}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/company" className={classes.Link}>
                    Company
                  </Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/achievements" className={classes.Link}>
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={classes.Link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
