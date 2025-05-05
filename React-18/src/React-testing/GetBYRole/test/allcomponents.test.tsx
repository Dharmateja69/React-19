import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Allcomponents from "../Component/allcomponents";

describe("Multiple components testing", () => {
  test("Testing multiple components", () => {
    render(<Allcomponents />);
    const roles = [
      "link",
      "contentinfo",
      "heading",
      "banner",
      "img",
      "checkbox",
      "spinbutton",
      "radio",
      "textbox",
      "list",
      "listitem",
    ];

    roles.forEach((role) => {
      expect(screen.getByRole(role)).toBeInTheDocument();
    });

    // Handle multiple buttons separately
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("Testing multiple buttons by name", () => {
    render(<Allcomponents />);
    const learn = screen.getByRole("button", { name: /Learn More/i });
    const submit = screen.getByRole("button", { name: /Submit/i });
    const generic = screen.getByRole("button", { name: /^Button$/i });

    expect(learn).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(generic).toBeInTheDocument();
  });
});

//getByRole() is a query function from React Testing Library that finds a DOM element by its accessible role, the way assistive technologies (like screen readers) identify elements (e.g., button, textbox, heading, etc.).
//<button>Click Me</button>
//const btn = screen.getByRole("button", { name: /Click me/i });
// expect(btn).toBeInTheDocument();
