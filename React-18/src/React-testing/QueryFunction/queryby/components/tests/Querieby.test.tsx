import { render, screen } from "@testing-library/react";
import QueriebyQueries from "../QueriebyQueries";

describe("Test queryBy methods", () => {
  it("should query by role", () => {
    render(<QueriebyQueries />);
    const alert = screen.queryByRole("alert");
    const button = screen.queryByRole("button");
    expect(alert).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should query by label text", () => {
    render(<QueriebyQueries />);
    const label1 = screen.queryByLabelText("Label 1");
    const label2 = screen.queryByLabelText("Label 2");
    expect(label1).toBeInTheDocument();
    expect(label2).toBeInTheDocument();
  });

  it("should query by placeholder text", () => {
    render(<QueriebyQueries />);
    const searchInput = screen.queryByPlaceholderText("Search");
    const emailInput = screen.queryByPlaceholderText("Email");
    expect(searchInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it("should query by text", () => {
    render(<QueriebyQueries />);
    const header = screen.queryByText("Header Text");
    const paragraph = screen.queryByText("This is some paragraph text.");
    expect(header).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("should query by test ID", () => {
    render(<QueriebyQueries />);
    const customElement = screen.queryByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });

  it("should query by display value", () => {
    render(<QueriebyQueries />);
    const input = screen.queryByDisplayValue("Pre-filled Text");
    expect(input).toBeInTheDocument();
  });
});
