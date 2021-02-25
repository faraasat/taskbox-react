import { PureInboxScreen } from "./inbox-screen.component";
// import { action } from "@storybook/addon-actions";
// import * as taskListStories from "../task-list/task-list.stories";
import { Provider } from "react-redux";
import store from "../../store/store";

// const store: any = {
//   getState: () => {
//     return {
//       tasks: taskListStories.DefaultTaskList.args.tasks,
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action("dispatch"),
// };

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
};

export const DefaultInboxScreen = (args: any) => {
  console.log("tasks", args);
  return <PureInboxScreen {...args} />;
};

export const ErrorInboxScreen = (args: any) => {
  return <PureInboxScreen {...args} />;
};
ErrorInboxScreen.args = {
  error: "Something",
};
