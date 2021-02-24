import { ISearchField } from "./search-field";
import SearchFieldComponent from "./search-field.component";

export default {
  title: "Search Field",
  component: SearchFieldComponent,
};

export const Default = (args: ISearchField) => {
  return (
    <SearchFieldComponent className={args.className} styles={args.styles} />
  );
};

Default.args = {
  className: "",
  styles: {},
};
