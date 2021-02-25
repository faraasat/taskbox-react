import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTask } from "../../store/task.slice";

import { IInputField } from "./input-field";

import "./search-field.styles.css";

import cuid from "cuid";



const InputFieldComponent: React.FC<IInputField> = ({ className, styles }) => {

  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();



  const handleTextSubmission = () => {

    if (text.length <= 3) {

      return;

    }

    dispatch(

      addTask({

        id: cuid(),

        title: text,

      })

    );

    setText("");

  };



  return (

    <span className="search-field">

      <input

        type="text"

        className={`${className} search-field__defaults ${

          text.length <= 3 && text.length >= 1 && "search-field__error"

        }`}

        style={styles}

        onChange={(e) => {

          setText(e.target.value);

        }}

        value={text}

        // onKeyPress={() => {

        //   dispatch(addTask(text));

        // }}

      />

      <button

        className="search-field__btn"

        onClick={() => handleTextSubmission()}

      >

        Add Task

      </button>

    </span>

  );

};



export default InputFieldComponent;

