import { ITask } from "../task/task";



export interface IInboxScreen {

  error?: null | string;

  tasks: ITask["task"][];

  loading: boolean;

}

