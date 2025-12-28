import React from "react";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavigationHeader } from "../components/navigation/NavigationHeader";
import { renderTest } from "../tests_helper/renderTest";
describe("Navigation header", () => {
  test("about", async () => {
    render(renderTest(<NavigationHeader />, { route: "/company/" }));
    const link = screen.getByTestId("company_link");
    userEvent.click(link);
    expect(screen.getByTestId("about_page")).toBeInTheDocument();
  });
});
