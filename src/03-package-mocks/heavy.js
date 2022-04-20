import React, { useEffect, useState } from "react";
import { fetch } from "cross-fetch";

export const Heavy = ({ endpoint }) => {
  const [data, setData] = useState();

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
