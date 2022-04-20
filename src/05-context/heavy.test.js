import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import fetchMock from "fetch-mock";
import React from "react";

import { NativeContext } from "./context";
import { Heavy } from "./heavy";

const fetch = fetchMock.sandbox();

fetch.get("/my-endpoint", "Hi!");

describe(Heavy, () => {
  it("renders a loading message when data hasn't loaded yet", async () => {
    render(
      <NativeContext.Provider value={{ fetch }}>
        <Heavy endpoint="/my-endpoint" />
      </NativeContext.Provider>
    );
    screen.getByText("loading...");
    await waitForElementToBeRemoved(() => screen.queryByText("loading..."));
  });

  it("renders a done message when data has loaded", async () => {
    render(
      <NativeContext.Provider value={{ fetch }}>
        <Heavy endpoint="/my-endpoint" />
      </NativeContext.Provider>
    );
    await screen.findByText(/Done:/);
  });
});
