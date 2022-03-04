import React from "react";
import MainView from "../components/MainView";
import { render, screen } from "@testing-library/react";

describe("MainView.jsx", () => {
  beforeEach(() => {
    render(<MainView />);
  });

  it("is expected to display info message", () => {
    expect(
      screen.getByText(
        "This website is obsolete. A new portfolio website is in development."
      )
    ).toBeVisible();
  });

  it("is expected to display a welcome message", () => {
    expect(screen.getByText("Welcome to my portfolio")).toBeVisible();
  });

  it("is expected to display first paragraph", () => {
    expect(
      screen.getByText(
        "This website is a work in progress. More updates with more projects are on the way."
      )
    ).toBeVisible();
  });

  it("is expected to display second paragraph", () => {
    expect(
      screen.getByText("I made this website using the following technologies:")
    ).toBeVisible();
  });
});
