import React from "react";
import {MemoryRouter} from "react-router-dom";
import { AppRouter } from "../router/AppRouter";

export const renderTestRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}
