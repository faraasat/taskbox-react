import React from "react";
import { IInputField } from "./input-field";
import "./search-field.styles.css";

const InputFieldComponent: React.FC<IInputField> = ({ className, styles }) => {
  return (
    <>
      <input
        type="text"
        className={`${className} search-field__defaults`}
        style={styles}
      />
    </>
  );
};

export default InputFieldComponent;
