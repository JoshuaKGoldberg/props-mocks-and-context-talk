import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import fetchMock from "fetch-mock";
import React from "react";

import { Heavy } from "./heavy";

const fetch = fetchMock.sandbox();

fetch.get("/my-endpoint", "Hi!");

describe(Heavy, () => {
  it("renders a loading message when data hasn't loaded yet", async () => {
    render(<Heavy endpoint="/my-endpoint" fetch={fetch} />);
    screen.getByText("loading...");
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."));
  });

  it("renders a done message when data has loaded", async () => {
    render(<Heavy endpoint="/my-endpoint" fetch={fetch} />);
    await screen.findByText(/Done:/);
  });
});
