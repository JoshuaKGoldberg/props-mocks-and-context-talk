import { render, screen } from "@testing-library/react";
import React from "react";

import { Light } from "./light";

describe(Light, () => {
  it("renders a happy message when happy is true", () => {
    render(<Light happy />);
    screen.getByText("I am happy!");
  });

  it("renders a sad message when happy is false", () => {
    render(<Light happy={false} />);
    screen.getByText("I am sad...");
  });
});
