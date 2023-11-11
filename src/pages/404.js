import React from "react";
import Layout from "../components/Layout/Layout";
import * as classes from "../styles/404.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={classes.NotFoundPage}>
        <div className={classes.ImageContainer}>
          <StaticImage src="../images/not-found.jpeg" width={500} />
        </div>
        <div className={classes.TextContent}>
          <span>Try Again Later</span>
          <p>This page is under construction or not found!</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
