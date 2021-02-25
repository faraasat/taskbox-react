import { Provider } from "react-redux";
import { Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Store from "../../store/store";
import { PureInboxScreen } from "./inbox-screen.component";

const store: any = {
  getState: () => {
    return {
      tasks: [
        { id: "1", title: "Task 1", state: "TASK_INBOX" },
        { id: "2", title: "Task 2", state: "TASK_INBOX" },
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
        { id: "6", title: "Task 6", state: "TASK_INBOX" },
      ],
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [
    (story: any) => (
      <Provider store={Store}>
        <div style={{ padding: "3rem" }}>{story()}</div>
      </Provider>
    ),
  ],
} as Meta;

export const DefaultInboxScreen = (args: any) => {
  return <PureInboxScreen {...args} />;
};
DefaultInboxScreen.args = {
  tasks: store.getState().tasks,
};

export const ErrorInboxScreen = (args: any) => {
  return <PureInboxScreen {...args} />;
};
ErrorInboxScreen.args = {
  ...DefaultInboxScreen.args.tasks,
  error: "Something",
};
