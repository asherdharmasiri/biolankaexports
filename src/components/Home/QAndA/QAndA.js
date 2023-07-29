import React from "react";
import * as classes from "./QAndA.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Button from "../../../ui/Button/Button";
import { StaticImage } from "gatsby-plugin-image";

const QAndA = () => {
  return (
    <section className={classes.QAndASection}>
      <div className={classes.QAndA}>
        <h2>
          Answers to Your <span>Organic Queries</span>
        </h2>
        <div className={classes.AccordianContainer}>
          <Accordion allowZeroExpanded preExpanded={[1]}>
            <AccordionItem className={classes.AccordianItem} uuid={1}>
              <AccordionItemHeading>
                <AccordionItemButton className={classes.AccordianButton}>
                  How long does it takes for a shipment?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={classes.ItemPanel}>
                At our company, we prioritize efficient and timely shipments to
                ensure that our customers receive their orders promptly. The
                duration of a shipment may vary depending on several factors
                such as the destination, shipping method, and customs
                procedures. On average, the transit time for our shipments
                ranges from X to Y days.
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={classes.AccordianItem} uuid={2}>
              <AccordionItemHeading>
                <AccordionItemButton className={classes.AccordianButton}>
                  Can I request a refund?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={classes.ItemPanel}
              ></AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={classes.AccordianItem} uuid={3}>
              <AccordionItemHeading>
                <AccordionItemButton className={classes.AccordianButton}>
                  What will happen if the product is damaged?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={classes.ItemPanel}
              ></AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={classes.AccordianItem} uuid={4}>
              <AccordionItemHeading>
                <AccordionItemButton className={classes.AccordianButton}>
                  Do you provide tracking for shipments?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={classes.ItemPanel}
              ></AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={classes.AccordianItem} uuid={5}>
              <AccordionItemHeading>
                <AccordionItemButton className={classes.AccordianButton}>
                  Can I get samples before buying?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel
                className={classes.ItemPanel}
              ></AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className={classes.RecentUpdates}>
        <div className={classes.Header}>
          <h2>Recent Udpates</h2>
          <Button outline>Read All</Button>
        </div>
        <div className={classes.GridContainer}>
          <StaticImage src="../../../images/home/1.png" />
          <StaticImage src="../../../images/home/2.png" />
          <StaticImage src="../../../images/home/3.png" />
          <StaticImage src="../../../images/home/4.png" />
        </div>
      </div>
    </section>
  );
};

export default QAndA;
