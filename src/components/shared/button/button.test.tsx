import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Button } from "./";

const buttonTestId = "button";

describe("<Button>", () => {
  it("Should be able to render the button", () => {
    render(<Button>Hey, click on me</Button>);

    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
  });

  it("Should be able to render based on the children prop", () => {
    render(<Button>Hey, click on me</Button>);

    expect(screen.getByTestId(buttonTestId)).toHaveTextContent(
      "Hey, click on me"
    );
  });

  it("Should be able to fire event", () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Hey, click on me</Button>);
    fireEvent.click(screen.getByTestId(buttonTestId));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Should be able to have default style", () => {
    render(<Button>Hey, click on me</Button>);

    expect(screen.getByTestId(buttonTestId)).toHaveStyle({
      width: "100%",
      maxWidth: "380px",
      height: "40px",
    });
  });
});
