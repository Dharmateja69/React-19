import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import GetAllbyqueries from "../Components/GetAllbyqueries";

describe("InteractiveDisabledComponent", () => {
  test("should render multiple elements that can be queried by various methods", () => {
    render(<GetAllbyqueries />);
    const inputext = screen.getAllByLabelText(/Label for Input/i);
    expect(inputext).toHaveLength(2);
    inputext.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("disabled");
    });
    const inputbyplaceholder =
      screen.getAllByPlaceholderText(/Enter something/i);
    expect(inputbyplaceholder).toHaveLength(2);
    inputbyplaceholder.forEach((i) => {
      expect(i).toBeDisabled();
    });

    const paragraphs = screen.getAllByText(/paragraph with some/i);
    expect(paragraphs).toHaveLength(2);
    paragraphs.forEach((p) => {
      expect(p).toBeInTheDocument();
    });

    const inputbydisplayvalue = screen.getAllByDisplayValue(/display value/i);
    expect(inputbydisplayvalue).toHaveLength(2);
    inputbydisplayvalue.forEach((i) => {
      expect(i).toBeInTheDocument();
      expect(i).toHaveAttribute("disabled");
    });
    const inputsByAnotherDisplayValue = screen.getAllByDisplayValue(
      /Another display value/i
    );
    expect(inputsByAnotherDisplayValue.length).toBe(1);
    expect(inputsByAnotherDisplayValue[0]).toBeInTheDocument();
    expect(inputsByAnotherDisplayValue[0]).toBeDisabled();

    const imagesByAltText = screen.getAllByAltText(/A sample image/i);
    expect(imagesByAltText.length).toBe(1);
    expect(imagesByAltText[0]).toBeInTheDocument();

    const imagesByAnotherAltText =
      screen.getAllByAltText(/Another sample image/i);
    expect(imagesByAnotherAltText.length).toBe(1);
    expect(imagesByAnotherAltText[0]).toBeInTheDocument();

    const divsByTitle = screen.getAllByTitle(/div with a title attribute/i);
    expect(divsByTitle.length).toBe(2);
    divsByTitle.forEach((div) => {
      expect(div).toBeInTheDocument();
    });

    const buttonsByRole = screen.getAllByRole("button", {
      name: /This is a button/i,
    });
    expect(buttonsByRole.length).toBe(2);
    buttonsByRole.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    const divsByTestId = screen.getAllByTestId(/custom-test-id/i);
    expect(divsByTestId.length).toBe(2);
    divsByTestId.forEach((div) => {
      expect(div).toBeInTheDocument();
    });
  });
});
