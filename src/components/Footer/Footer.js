import React from "react";
import * as classes from "./Footer.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../ui/Button/Button";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Header}>
        <StaticImage src="../../images/logo-white.png" width={160} />
        <div className={classes.ButtonContainer}>
          <p>Need a custom quotation?</p>
          <Button secondary>Contact Us</Button>
        </div>
      </div>
      <div className={classes.Content}>
        <div className={classes.Social}>
          <StaticImage src="../../images/Social.png" width={200} />
          <div>
            <StaticImage src="../../images/lk.png" width={20} />
            <p>Proudly made in Sri Lanka</p>
          </div>
        </div>
        <div className={classes.Links}>
          <div>
            <span>Products</span>
            <ul>
              <li>
                <Link>Coconut</Link>
              </li>
              <li>
                <Link>Tea</Link>
              </li>
              <li>
                <Link>Rubber</Link>
              </li>
              <li>
                <Link>Gems</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>Company</span>
            <ul>
              <li>
                <Link>Our Story</Link>
              </li>
              <li>
                <Link>Benefits</Link>
              </li>
              <li>
                <Link>Team</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <span>Help</span>
            <ul>
              <li>
                <Link>FAQs</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
