import React, { useState, useEffect } from 'react';

function QueryParamParser() {
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const params = {};

    for (const [key, value] of urlParams) {
      params[key] = value;
    }

    setQueryParams(params);
  }, []);

  return (
    <div className="App">
      <h1>Query Parameter Parser</h1>
      <p>Parsed Query Parameters:</p>
      <pre>{JSON.stringify(queryParams, null, 2)}</pre>
    </div>
  );
}

export default QueryParamParser;