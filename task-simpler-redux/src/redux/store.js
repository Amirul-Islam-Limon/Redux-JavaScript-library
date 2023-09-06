import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import usersSlice from "./features/users/usersSlice";

export const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        usersSlice:usersSlice,
    },
})