import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Loader } from "../Loader";

describe("Loader Component", () => {
  it("should render without crashing", () => {
    render(<Loader loading />);

    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("should not render when loading is false", () => {
    render(<Loader loading={false} />);

    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });
});
