import { ITask } from "../task/task";

export interface ITaskList {
  loading: boolean;
  tasks: ITask["task"][];
}
