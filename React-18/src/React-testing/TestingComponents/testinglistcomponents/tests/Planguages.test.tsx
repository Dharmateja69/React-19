import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProgrammingLanguagesList from "../component/ProgrammingLanguagesList";

describe("Testing List Components", () => {
  test("testing the programe languages component", () => {
    const languages = ["JavaScript", "Python", "Java"];
    render(<ProgrammingLanguagesList languages={languages} />);
    expect(languages[0]).toBe("JavaScript");
  });
  test("testing the programe languages empty", () => {
    const languages: string[] = [];
    render(<ProgrammingLanguagesList languages={languages} />);
    const notfound = screen.getByText(/No/i);
    expect(notfound).toBeInTheDocument();
  });
});
