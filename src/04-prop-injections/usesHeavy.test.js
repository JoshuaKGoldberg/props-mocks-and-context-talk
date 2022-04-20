import { screen, render, fireEvent } from "@testing-library/react";
import fetchMock from "fetch-mock";
import React from "react";

import { UsesHeavy } from "./usesHeavy";

const fetch = fetchMock.sandbox();

fetch.get("/some-endpoint", "Hi!");

describe(UsesHeavy, () => {
  it("renders an offer to load before user interaction", () => {
    render(<UsesHeavy fetch={fetch} />);
    screen.getByText("Load?");
  });

  it("loads data on click", async () => {
    render(<UsesHeavy fetch={fetch} />);
    fireEvent.click(screen.getByRole("button"));
    await screen.findByText("Done: Hi!");
  });
});
