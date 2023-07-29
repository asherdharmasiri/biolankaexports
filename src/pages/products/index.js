import React from "react";
import Layout from "../../components/Layout/Layout";
import HandPicked from "../../components/Products/HandPicked/HandPicked";
import Points from "../../components/Products/Points/Points";

const ProductsPage = () => {
  return (
    <Layout>
      <HandPicked />
      <Points />
    </Layout>
  );
};

export default ProductsPage;

export const Head = () => <title>Products Page</title>;
