import InputFieldComponent from "./input-field.component";

import { IInputField } from "./input-field";

import { Meta } from "@storybook/react/types-6-0";

import Store from "../../store/store";

import { Provider } from "react-redux";



export default {

  title: "Input Field",

  component: InputFieldComponent,

  decorators: [

    (story: any) => (

      <Provider store={Store}>

        <div style={{ padding: "3rem" }}>{story()}</div>

      </Provider>

    ),

  ],

} as Meta;



export const Default = (args: IInputField) => {

  return (

    <InputFieldComponent className={args.className} styles={args.styles} />

  );

};



Default.args = {

  className: "",

  styles: {},

};

