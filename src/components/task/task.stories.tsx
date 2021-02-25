import { Provider } from "react-redux";
import Store from "../../store/store";
import { ITask } from "./task";
import TaskComponent from "./task.component";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Task",
  component: TaskComponent,
  decorators: [
    (story: any) => (
      <Provider store={Store}>
        <div style={{ padding: "3rem" }}>{story()}</div>
      </Provider>
    ),
  ],
} as Meta;

export const DefaultTask = (args: ITask) => {
  return <TaskComponent {...args} />;
};
DefaultTask.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
  onArchiveTask: "",
  onPinnedTask: "",
  className: "",
};

export const PinnedTask = (args: ITask) => {
  return <TaskComponent {...args} />;
};
PinnedTask.args = {
  task: { ...DefaultTask.args.task, state: "TASK_PINNED" },
  onArchiveTask: "",
  onPinnedTask: "",
  className: "",
};

export const ArchiveTask = (args: ITask) => {
  return <TaskComponent {...args} />;
};
ArchiveTask.args = {
  task: { ...DefaultTask.args.task, state: "TASK_ARCHIVED" },
  onArchiveTask: "",
  onPinnedTask: "",
  className: "",
};
