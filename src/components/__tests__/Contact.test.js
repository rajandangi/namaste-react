import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

/**
 * Steps:
 * 1. Render the Component
 * 2. Query the element
 * 3. Assert the element is in the document
 */

describe("Contact Component Test Cases", () => {
  test("Should  render the contact us componet", () => {
    render(<Contact />); // render the contact us component

    // get the heading element
    const heading = screen.getByRole("heading");

    // check if the heading element is in the document
    expect(heading).toBeInTheDocument();
  });

  test("Should render the contact us component with button", () => {
    render(<Contact />); // render the contact us component

    // get the button element
    const button = screen.getByRole("button");

    // check if the button element is in the document
    expect(button).toBeInTheDocument();
  });

  test("should load 2 input fields", () => {
    render(<Contact />); // render the contact us component

    // get all input elements
    const inputFields = screen.getAllByRole("textbox");

    // check if there are 2 input elements
    expect(inputFields.length).toBe(3);
  });
});
