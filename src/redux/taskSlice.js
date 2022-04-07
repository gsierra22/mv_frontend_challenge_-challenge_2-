import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        task: action.payload.task,
        completed: false,
      };
      state.push(newTask);
    },
    changeStatus: (state, action) => {
      const index = state.findIndex((tasks) => tasks.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTask: (state, action) => {
      return state.filter((tasks) => tasks.id !== action.payload.id);
    },
  },
});

export const { addTask, changeStatus, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
