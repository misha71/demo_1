import { createSlice } from '@reduxjs/toolkit';
import { ModalState } from "../../types/modal";

const initialState:ModalState = {
    visible: false,
    type: null
}
export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal(state, {payload = "add"}){
            state.visible = true;
            state.type = payload;
        },
        hideModal(state){
            state.visible = false;
        }
    }
})
export const modalReducer = modalSlice.reducer;
export const {showModal, hideModal} = modalSlice.actions;
