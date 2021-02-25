import { createSlice } from "@reduxjs/toolkit";



const defaultValues = [

  { id: "1", title: "Task 1", state: "TASK_INBOX" },

  { id: "2", title: "Task 2", state: "TASK_INBOX" },

  { id: "3", title: "Task 3", state: "TASK_INBOX" },

  { id: "4", title: "Task 4", state: "TASK_INBOX" },

  { id: "5", title: "Task 5", state: "TASK_PINNED" },

];



const TaskSlice = createSlice({

  name: "Task Slice",

  initialState: defaultValues,

  reducers: {

    archiveTask: (state, action) => {

      state.forEach((task) => {

        if (String(task.id) === String(action.payload)) {

          task.state = "TASK_ARCHIVED";

          const index = state.indexOf(task);

          state.splice(index, 1);

        }

      });

    },

    pinTask: (state, action) => {

      state.forEach((task: any) => {

        if (String(task.id) === String(action.payload)) {

          if (task.state !== "TASK_PINNED") task.state = "TASK_PINNED";

          else task.state = "TASK_INBOX";

        }

      });

    },

    addTask: (state, action) => {

      const task = {

        id: action.payload.id,

        title: action.payload.title,

        state: "TASK_INBOX",

      };

      state.push(task);

    },

  },

});



export const { archiveTask, pinTask, addTask } = TaskSlice.actions;

export const selectTasks = (state: any) => ({

  defaultValue: state.tasks,

});

export default TaskSlice;

