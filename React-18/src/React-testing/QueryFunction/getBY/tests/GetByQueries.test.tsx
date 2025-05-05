import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import GetByQueries from "../components/GetByQueries";

describe("GetByQueries", () => {
  test("h1 MyComponent", () => {
    render(<GetByQueries />);
    const heading = screen.getByText(/MyComponent/i);
    expect(heading).toBeInTheDocument();
  });
  test("should find a button with aria-label submit", () => {
    render(<GetByQueries />);
    const button = screen.getByLabelText("submit");
    expect(button).toBeInTheDocument();
  });
  test("should find an input with placeholder text", () => {
    render(<GetByQueries />);
    const input = screen.getByPlaceholderText(/Enter text/i);
    expect(input).toBeInTheDocument();
  });
  test("should find an anchor tag with a specific href", () => {
    render(<GetByQueries />);
    const a = screen.getByRole("link", { name: /Visit Example/i });
    expect(a).toHaveAttribute("href", "https://example.com");
  });
  test("should find a div using data-testid", () => {
    render(<GetByQueries />);
    const div = screen.getByTestId("custom-element");
    expect(div).toBeInTheDocument();
    expect(div).toHaveTextContent("Custom Element");
  });
  test("should find an element by its role", () => {
    render(<GetByQueries />);
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeInTheDocument();
  });
});
