import React from "react";

import { connect } from "react-redux";

import TaskListComponent from "../task-list/task-list.component";

import { IInboxScreen } from "./inbox-screen";

import "./inbox-screen.styles.css";

import CancelIcon from "@material-ui/icons/Cancel";

import InputFieldComponent from "../input-field/input-field.component";



export const PureInboxScreen: React.FC<IInboxScreen> = ({

  error = null,

  tasks,

  loading,

}) => {

  if (error) {

    return (

      <div className="inbox-screen__page__lists-show">

        <div className="inbox-screen__wrapper-message">

          <CancelIcon />

          <div className="inbox-screen__title-message">Oh no!</div>

          <div className="inbox-screen__subtitle-message">

            Something went wrong

          </div>

        </div>

      </div>

    );

  }



  return (

    <div className="task-box__listings">

      <nav>

        <span className="task-box__title-page">

          <span className="task-box__title-wrapper">Taskbox</span>

        </span>

      </nav>

      <InputFieldComponent className='task-box__add-field' />

      <TaskListComponent loading={loading} tasks={tasks} />

    </div>

  );

};



PureInboxScreen.defaultProps = {

  error: null,

};



export default connect((state: { error: string }) => ({ error: state.error }))(

  PureInboxScreen

);

