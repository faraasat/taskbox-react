import InputFieldComponent from "./input-field.component";
import { IInputField } from "./input-field";

export default {
  title: "Input Field",
  component: InputFieldComponent,
};

export const Default = (args: IInputField) => {
  return (
    <InputFieldComponent className={args.className} styles={args.styles} />
  );
};

Default.args = {
  className: "",
  styles: {},
};
