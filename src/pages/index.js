import * as React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero/Hero";
import HandPicked from "../components/Home/HandPicked/HandPicked";
import ProductSection from "../components/Home/ProductSection/ProductSection";
import InspiredBy from "../components/Home/InspiredBy/InspiredBy";
import QAndA from "../components/Home/QAndA/QAndA";

import "react-accessible-accordion/dist/fancy-example.css";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <HandPicked />
      <ProductSection />
      <InspiredBy />
      <QAndA />
    </Layout>
  );
};

export default HomePage;

export const Head = () => <title>Home Page</title>;
