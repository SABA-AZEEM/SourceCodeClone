// 'use client'
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    courses : null,
};

const courseSlice = createSlice({
    name:'course',
    initialState,
    reducers:{
        storeCourses:(state,action)=>{
            state.courses = action.payload;
        },
    },
});

export const {storeCourses} = courseSlice.actions;
export default courseSlice.reducer;