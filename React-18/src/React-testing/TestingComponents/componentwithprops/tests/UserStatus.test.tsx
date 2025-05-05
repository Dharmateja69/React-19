// 1. Import all the necessary packages
// 2. Describe your test suite
// 3. Write your tests
// 4. Render your component to the DOM (for testing)
// 5. Select the elements you want to test
// 6. Assert the expected results

import { render, screen } from "@testing-library/react";

import { describe, expect } from "vitest";
import UserStatus from "../Component/UserStatus";
describe("Userstatus", () => {
  test("renders the ", () => {
    render(<UserStatus email="jhone@gmail.com" />);
    // Check if the welcome message is rendered
    const welcomeMessage = screen.getByText(/Welcome/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
  test("renders the button if no email ", () => {
    render(<UserStatus email="" />);
    // Check if the welcome message is rendered
    const signupbutton = screen.getByText(/Sign Up/i);
    expect(signupbutton).toBeInTheDocument();
  });
});
