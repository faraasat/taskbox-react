import { ITask } from "../task/task";
import TaskComponent from "../task/task.component";
import { ITaskList } from "./task-list";
import "./task-list.styles.css";
import CheckIcon from "@material-ui/icons/Check";

const TaskListComponent: React.FC<ITaskList> = ({ loading, tasks }) => {
  const LoadingRow = (
    <div className="task-list__loading-item">
      <span className="task-list__glow-checkbox" />
      <span className="task-list__glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="task-list__loading-alignment">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks?.length === 0 && loading === false) {
    return (
      <div className="task-list__none-items">
        <div className="task-list__wrapper-message">
          <CheckIcon />
          <div className="task-list__title-message">You have no tasks</div>
          <div className="task-list__subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state === "TASK_INBOX"),
  ];

  return (
    <div className="task-list__available-items">
      {tasksInOrder.map((task: ITask["task"]) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskListComponent;
