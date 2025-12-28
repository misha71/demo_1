import { createSlice } from '@reduxjs/toolkit';
import { MenuState } from './../../types/menu';
const initialState:MenuState = {
    visible: false
}
const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        showBurger(state){
            state.visible = true;
        },
        hideBurger(state){
            state.visible = false;
        },
        toggleBurger(state){
            state.visible = !state.visible;
        }
    }
})
export const menuReducer = menuSlice.reducer;
export const {showBurger, hideBurger, toggleBurger} = menuSlice.actions;
