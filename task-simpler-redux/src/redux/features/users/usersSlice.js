import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Amirul Islam",
    email: "bdamirul0@gmail.com",
    userTasks:[],
}

const usersSlice = createSlice({
    name: "usersSlice",
    initialState,
    reducers: {
        
    }
})

export default usersSlice.reducer;