import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../router/AppRouter";
import { setupStore } from "../store"

export const renderTest = (component, options) => {
    const store = setupStore();
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    )
}
