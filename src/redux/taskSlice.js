import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [{ id: 1, task: "todo1", completed: false }],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        task: action.payload.task,
        completed: false,
      };
      state.push(newTask);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
