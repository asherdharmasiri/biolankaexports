import React from "react";
import * as classes from "./ContactForm.module.scss";
import Button from "../../../ui/Button/Button";
import { StaticImage } from "gatsby-plugin-image";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <div className={classes.ContactForm}>
      <div className={classes.ContactPanel}>
        <h2>Quick Access</h2>
        <div className={classes.CardContainer}>
          <div className={classes.ContactCard}>
            <StaticImage src="../../../images/contact/email.png" width={100} />
            <div>
              <span>Email us</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, pariatur! Eos, fuga, ipsum beatae, soluta
                exercitationem{" "}
              </p>
              <Button secondary width={100}>
                Email Us
              </Button>
            </div>
          </div>
          <div className={classes.ContactCard}>
            <StaticImage src="../../../images/contact/phone.png" width={100} />
            <div>
              <span>Call us</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, pariatur! Eos, fuga, ipsum beatae, soluta
                exercitationem{" "}
              </p>
              <Button secondary width={100}>
                +94 77 442 6677
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Form}>
        <div className={classes.Title}>
          <h2>Leave us a Message</h2>
        </div>
        <form>
          <div className={classes.Row}>
            <FormControl isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input
                type="email"
                size="lg"
                placeholder="John Doe"
                _placeholder={{ opacity: 0.6, fontSize: 16 }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="email"
                size="lg"
                placeholder="0774426677"
                _placeholder={{ opacity: 0.6, fontSize: 16 }}
              />
            </FormControl>
          </div>
          <div className={classes.Row}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="email"
                size="lg"
                placeholder="Kinsey Road, Colombo 08"
                _placeholder={{ opacity: 0.6, fontSize: 16 }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                size="lg"
                placeholder="johndoe@gmail.com"
                _placeholder={{ opacity: 0.6, fontSize: 16 }}
              />
            </FormControl>
          </div>
          <div className={classes.Row}>
            <FormControl isRequired>
              <FormLabel>Request Type</FormLabel>
              <Select
                placeholder="Select option"
                size="lg"
                _placeholder={{ opacity: 0.6, fontSize: 16 }}
              >
                <option value="option1">New Business Enquiry</option>
                <option value="option2">Quotation Enquiry</option>
                <option value="option3">Product Enquiry</option>
                <option value="option3">Request Help</option>
                <option value="option3">Other</option>
              </Select>
            </FormControl>
          </div>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="How can we help you?"
              _placeholder={{ opacity: 0.6, fontSize: 16 }}
            />
          </FormControl>
          <Button outline width={100}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
