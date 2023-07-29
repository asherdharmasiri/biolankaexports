import React from "react";
import * as classes from "./Button.module.scss";

const Button = ({ children, primary, secondary, outline, inverse }) => {
  let styleClasses = [classes.Button];
  if (primary) {
    styleClasses.push(classes.Primary);
  } else if (secondary) {
    styleClasses.push(classes.Secondary);
  } else if (outline) {
    styleClasses.push(classes.Outline);
  } else if (inverse) {
    styleClasses.push(classes.Inverse);
  }
  return <button className={styleClasses.join(" ")}>{children}</button>;
};

export default Button;
