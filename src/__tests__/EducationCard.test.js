import React from "react";
import EducationCard from "../components/EducationCard";
import { screen, render } from "@testing-library/react";

const education = {
  id: 1,
  institute: "Parthenope University of Naples",
  title: "Department of Computer Science",
  period: "2016",
  description:
    "Completed courses: Programming, Computer Architecture, Databases, Physics, Business Economy, English"
};

describe("EducationCard.jsx", () => {
  beforeEach(() => {
    render(<EducationCard education={education} />);
  });

  it("is expected to display institute name", () => {
    expect(screen.getByText("Parthenope University of Naples")).toBeVisible();
  });

  it("is expected to display education title", () => {
    expect(screen.getByText("Department of Computer Science")).toBeVisible();
  });

  it("is expected to display time period", () => {
    expect(screen.getByText("2016")).toBeVisible();
  });

  it("is expected to display subjects", () => {
    expect(
      screen.getByText(
        "Completed courses: Programming, Computer Architecture, Databases, Physics, Business Economy, English"
      )
    ).toBeVisible;
  });
});
