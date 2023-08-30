import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("", () => {
  it("Should be able to see the initial text on screen", () => {
    render(<App />);

    expect(screen.getByText("Hello Vitest")).toBeInTheDocument();
  });
});
