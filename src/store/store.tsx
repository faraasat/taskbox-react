import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./task.slice";

const Store = configureStore({
  reducer: {
    tasks: TaskSlice.reducer,
  },
});

export default Store;
