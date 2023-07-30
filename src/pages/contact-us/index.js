import React from "react";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/ContactUs/Header/Header";
import ContactForm from "../../components/ContactUs/ContactForm/ContactForm";

const ContactUsPage = () => {
  return (
    <Layout>
      <Header />
      <ContactForm />
    </Layout>
  );
};

export default ContactUsPage;

export const Head = () => <title>Contact Us</title>;
