import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[]
}
const taskSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        AddTask: (state, action) => {
            if (state.tasks.length == 0) {
                state.tasks.push({id:1, status:"pending", ...action.payload});
            }
            else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({ id: lastElement.id + 1, status:"pending", ...action.payload });
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateStatus: (state, action) => {
            const clickedTask = state.tasks.find(task => task.id === action.payload.id);
            clickedTask.status = action.payload.newStatus;
        }
    }
})

export const { AddTask, updateStatus, removeTask  } = taskSlice.actions;
export default taskSlice.reducer;