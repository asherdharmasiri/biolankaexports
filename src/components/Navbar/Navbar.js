import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as classes from "./Navbar.module.scss";
import Button from "../../ui/Button/Button";

const Navbar = () => {
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
          <Link to='/company' className={classes.Link}>Company</Link>
        </li>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/achievements' className={classes.Link}>Achievements</Link>
        </li>
        <li>
          <Link to='/contact' className={classes.Link}>Contact</Link>
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
    </nav>
  );
};

export default Navbar;
