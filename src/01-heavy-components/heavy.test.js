import { render, screen } from "@testing-library/react";
import React from "react";

import { Heavy } from "./heavy";

describe(Heavy, () => {
  it("renders a loading message when data hasn't loaded yet", () => {
    render(<Heavy endpoint="https://www.google.com" />);
    screen.getByText("loading...");
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."));
  });

  it("renders a done message when data has loaded", async () => {
    render(<Heavy endpoint="https://www.google.com" />);
    await screen.findByText(/Done:/);
  });
});
