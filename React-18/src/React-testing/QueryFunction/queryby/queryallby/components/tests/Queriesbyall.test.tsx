import { render, screen } from "@testing-library/react";
import Queriebyall from "../Queriebyall";

describe("Test queryAllBy methods", () => {
  it("should query all by role", () => {
    render(<Queriebyall />);
    const buttons = screen.queryAllByRole("button");
    const alerts = screen.queryAllByRole("alert");
    const regions = screen.queryAllByRole("region");

    expect(buttons).toHaveLength(2);
    expect(alerts).toHaveLength(2);
    expect(regions).toHaveLength(2);
  });

  it("should query all by label text", () => {
    render(<Queriebyall />);
    const labels = screen.queryAllByLabelText(/Label/);
    expect(labels).toHaveLength(3);
  });

  it("should query all by placeholder text", () => {
    render(<Queriebyall />);
    const searchInputs = screen.queryAllByPlaceholderText("Search");
    const emailInput = screen.queryAllByPlaceholderText("Email");

    expect(searchInputs).toHaveLength(3);
    expect(emailInput).toHaveLength(1);
  });

  it("should query all by text", () => {
    render(<Queriebyall />);
    const headers = screen.queryAllByText(/Header Text/);
    const paragraphs = screen.queryAllByText(/paragraph text/);

    expect(headers).toHaveLength(2);
    expect(paragraphs).toHaveLength(2);
  });

  it("should query all by test ID", () => {
    render(<Queriebyall />);
    const customElements = screen.queryAllByTestId("custom-element");
    expect(customElements).toHaveLength(2);
  });

  it("should query all by display value", () => {
    render(<Queriebyall />);
    const inputValues = screen.queryAllByDisplayValue("Pre-filled Text 1");
    const inputValues2 = screen.queryAllByDisplayValue("Pre-filled Text 2");

    expect(inputValues).toHaveLength(2);
    expect(inputValues2).toHaveLength(1);
  });
});
