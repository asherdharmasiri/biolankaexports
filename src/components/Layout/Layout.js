import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div style={{ marginTop: "120px" }}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
