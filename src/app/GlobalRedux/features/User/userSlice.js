'use client'
import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const initialState = {
    currentUser : Cookies.get('currentUser') ? JSON.parse(Cookies.get('currentUser')) : null,
};


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
        },
        signOut:(state,action)=>{
            state.currentUser = null;
        }

    },
});

export const {signInSuccess,signOut} = userSlice.actions;
export default userSlice.reducer;