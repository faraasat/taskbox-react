import React from "react";
import { connect } from "react-redux";
import { TaskListComponent } from "../task-list/task-list.component";
import { IInboxScreen } from "./inbox-screen";

export const PureInboxScreen: React.FC<IInboxScreen> = ({
  error = null,
  tasks,
  loading,
}) => {
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
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
