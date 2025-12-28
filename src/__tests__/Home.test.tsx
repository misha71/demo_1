import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { renderTest } from "../tests_helper/renderTest";
import { server } from "../tests_helper/mocks";
import { rest } from "msw";
import clearAllMocks = jest.clearAllMocks;
const data = [
    {
        description: "описание темы 1",
        title: "тема 1",
        id: "-Nh5hF-2AWf-N1nugqD_",
    },
    { description: "описание 2", title: "тема 2", id: "-NhJFASRIHzL4joHlzlT" },
];
describe("main page", () => {
    // Enable the API mocking before tests.
    beforeAll(() => server.listen())
    // моковые данные для ручки: /items.json
    test("load data", async () => {
        server.use(
            rest.get("/items.json", (_req, res, ctx) => {
                return res(ctx.json(data));
            })
        );
        render(renderTest(null, { route: "/" }));
        const check =  await screen.findByText(/тема 2/i);
        expect(check).toBeInTheDocument();
    });
    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => server.resetHandlers())

// Disable the API mocking after the tests finished.
    afterAll(() => server.close())
});
