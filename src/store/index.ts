import { menuReducer } from './menu/menuSlice';
import { modalReducer } from "./modal/modalSlice";
import { formReducer } from "./form/formSlice";
import { alertReducer } from "./alert/alertSlice";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { queryApi } from "./query/queryApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const rootReducer = combineReducers({
  [queryApi.reducerPath]: queryApi.reducer,
  alert: alertReducer,
  form: formReducer,
  modal: modalReducer,
  menu: menuReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(queryApi.middleware),
  });
};
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

