import React, { useState } from "react";

import { Heavy } from "./heavy";

export const UsesHeavy = ({ fetch }) => {
  const [ready, setReady] = useState(false);

  return ready ? (
    <Heavy endpoint="/some-endpoint" fetch={fetch} />
  ) : (
    <button onClick={() => setReady(true)} type="button">
      Load?
    </button>
  );
};
