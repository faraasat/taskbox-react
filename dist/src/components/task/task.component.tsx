import React from "react";

import { ITask } from "./task";

import StarBorderIcon from "@material-ui/icons/StarBorder";

import StarIcon from "@material-ui/icons/Star";

import "./task.styles.css";

import { archiveTask, pinTask } from "../../store/task.slice";

import { useDispatch } from "react-redux";



const TaskComponent: React.FC<ITask> = ({

  task: { id, title, state },

  className,

}) => {

  const dispatch = useDispatch();



  return (

    <div className={`${state} ${className} task-item`}>

      <div className="task-item__left">

        <label className="task-item__checkbox">

          <input

            type="checkbox"

            defaultChecked={state === "TASK_ARCHIVED"}

            disabled={true}

            name="checked"

          />

          <span

            className="task-item__checkbox-custom"

            onClick={() => dispatch(archiveTask(String(id)))}

          />

        </label>

        <div className="task-item__title">

          <input type="text" value={title} readOnly={true} />

        </div>

      </div>

      <div

        className="task-item__actions"

        onClick={(event) => event.stopPropagation()}

      >

        {state === "TASK_PINNED" ? (

          <span onClick={() => dispatch(pinTask(String(id)))}>

            <StarIcon style={{ color: "#6db1ff" }} />

          </span>

        ) : (

          <span onClick={() => dispatch(pinTask(String(id)))!}>

            <StarBorderIcon style={{ color: "#ff1d68" }} />

          </span>

        )}

      </div>

    </div>

  );

};



export default TaskComponent;

