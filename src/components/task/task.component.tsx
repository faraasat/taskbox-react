import React from "react";
import { ITask } from "./task";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import "./task.styles.css";

const TaskComponent: React.FC<ITask> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinnedTask,
  className,
}) => {
  return (
    <div className={`${state} ${className} task-item`}>
      <div className="task-item__left">
        <label className="task-item__checkbox">
          <input
            type="checkbox"
            defaultChecked={state === "TASK_PINNED"}
            disabled={true}
            name="checked"
          />
          <span
            className="task-item__checkbox-custom"
            onClick={() => onArchiveTask(id)}
          />
        </label>
        <div className="task-item__title">
          <input
            type="text"
            value={title}
            readOnly={true}
            placeholder="Input title"
          />
        </div>
      </div>
      <div
        className="task-item__actions"
        onClick={(event) => event.stopPropagation()}
      >
        {state === "TASK_ARCHIVED" ? (
          <span onClick={() => onPinnedTask(id)}>
            <StarIcon style={{ color: "#6db1ff" }} />
          </span>
        ) : (
          <span onClick={() => onPinnedTask(id)}>
            <StarBorderIcon style={{ color: "#ff1d68" }} />
          </span>
        )}
      </div>
    </div>
  );
};

export default TaskComponent;
