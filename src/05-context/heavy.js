import React, { useContext, useEffect, useState } from "react";

import { NativeContext } from "./context";

export const Heavy = ({ endpoint }) => {
  const [data, setData] = useState();
  const { fetch } = useContext(NativeContext);

  useEffect(() => {
    fetch(endpoint)
      .then(async (response) => {
        setData(await response.text());
      })
      .catch((error) => {
        setData(new Error(error));
      });
  }, []);

  return data ? <div>Done: {data}</div> : <div>loading...</div>;
};
