import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Dropdown from "../Dropdown";

describe("Dropdown component", () => {
  it("Dropdown should render correctly", () => {
    render(<Dropdown />);
    const dropdown = screen.getByRole("dropdown");
    expect(dropdown).toBeInTheDocument();
  });
});