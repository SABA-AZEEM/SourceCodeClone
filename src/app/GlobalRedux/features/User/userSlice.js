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
            Cookies.set('currentUser', JSON.stringify(action.payload));
        },


    },
});

export const {signInSuccess} = userSlice.actions;
export default userSlice.reducer;