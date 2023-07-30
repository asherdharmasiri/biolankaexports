import React from "react";
import * as classes from "./Button.module.scss";

const Button = ({ children, primary, secondary, outline, inverse, width }) => {
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
  return (
    <button className={styleClasses.join(" ")} style={{ width: width + "%" }}>
      {children}
    </button>
  );
};

export default Button;
