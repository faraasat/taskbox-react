import { Provider } from "react-redux";

import Store from "../../store/store";

import * as TaskStories from "../task/task.stories";

import { ITaskList } from "./task-list";

import TaskListComponent from "./task-list.component";

import { Meta } from "@storybook/react/types-6-0";



export default {

  component: TaskListComponent,

  title: "TaskList",

  decorators: [

    (story: any) => (

      <Provider store={Store}>

        <div style={{ padding: "3rem" }}>{story()}</div>

      </Provider>

    ),

  ],

} as Meta;



export const DefaultTaskList = (args: ITaskList) => {

  return <TaskListComponent {...args} />;

};

DefaultTaskList.args = {

  tasks: [

    { ...TaskStories.DefaultTask.args.task, id: "1", title: "Task 1" },

    { ...TaskStories.DefaultTask.args.task, id: "2", title: "Task 2" },

    { ...TaskStories.DefaultTask.args.task, id: "3", title: "Task 3" },

    { ...TaskStories.DefaultTask.args.task, id: "4", title: "Task 4" },

    { ...TaskStories.DefaultTask.args.task, id: "5", title: "Task 5" },

    { ...TaskStories.DefaultTask.args.task, id: "6", title: "Task 6" },

  ],

};



export const PinnedTaskList = (args: ITaskList) => {

  return <TaskListComponent {...args} />;

};

PinnedTaskList.args = {

  tasks: [

    ...DefaultTaskList.args.tasks.slice(0, 5),

    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },

  ],

};



export const LoadingTaskList = (args: ITaskList) => {

  return <TaskListComponent {...args} />;

};

LoadingTaskList.args = {

  tasks: [],

  loading: true,

};



export const EmptyTaskList = (args: ITaskList) => {

  return <TaskListComponent {...args} />;

};

EmptyTaskList.args = {

  ...LoadingTaskList.args,

  loading: false,

};

