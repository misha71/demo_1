import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormState, FormPayload } from "./../../types/form";
const initialState: FormState = {
  fields: [
    { name: "title", title: "Название", value: "", type: "text" },
    { name: "description", title: "Описание", value: "", type: "text" },
  ],
  id: null
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    clearFields(state) {
      state.fields = initialState.fields;
      state.id = initialState.id;
    },
    updateFields(state, { payload }: PayloadAction<FormPayload>) {
        const {name, value} = payload;
        state.fields = state.fields.map((item) => {
            if(item.name == name){
                item.value = value;
            }
            return item;
        })
    },
    updateId(state, {payload}){
        state.id = payload;
    }
  },
});
export const formReducer = formSlice.reducer;
export const {clearFields, updateFields, updateId} = formSlice.actions;
