import React from "react";
import { ISearchField } from "./search-field";
import './search-field.styles.css'

const SearchFieldComponent: React.FC<ISearchField> = ({
  className,
  styles,
}) => {
  return (
    <>
      <input type="text" className={`${className} search-field__defaults`} style={styles} />
    </>
  );
};

export default SearchFieldComponent;
