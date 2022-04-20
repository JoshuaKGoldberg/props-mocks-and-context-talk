import React, { useEffect, useState } from "react";

export const Heavy = ({ endpoint, fetch }) => {
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
