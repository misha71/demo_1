import { AlertPayload } from './../../types/alert';
import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertState } from "../../types/alert";

const initialState:AlertState = {
    text: [],
    show: false,
    type: null
}
export const alertSlice = createSlice({
name: "alert",
initialState,
reducers: {
    show(state, {payload}:PayloadAction<AlertPayload>){
        state.show = true;
        state.text = payload.text;
        state.type = payload.type;
    },
    hide(state){
        state.show = false;
    }
}
})
export const alertReducer = alertSlice.reducer;
export const {show, hide} = alertSlice.actions;