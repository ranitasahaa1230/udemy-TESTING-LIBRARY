import { logRoles } from "@testing-library/dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  // const {container}=render(<App />);
  // logRoles(container);

  render(<App />);

  // find an element with a role of button and text matching /blue/i
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  // expect the class to be red
  expect(buttonElement).toHaveClass("red");

  //click button
  fireEvent.click(buttonElement);

  // expect the class to be blue
  expect(buttonElement).toHaveClass("blue");

  // expect the button text to match /red/i
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("button has correct label and color after click", () => {});
