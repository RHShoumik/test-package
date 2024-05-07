import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Avatar component", () => {
  it("Avatar should render correctly", () => {
    render(<Avatar />);
    const avatar = screen.getByRole("avatar");
    expect(avatar).toBeInTheDocument();
  });
});