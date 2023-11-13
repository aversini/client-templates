import "./testbed.css";

import React, { useEffect } from "react";

/**
 * Your imports here. For example:
 *
 * import 'some-lib/dist/style.css';
 * import { Button } from 'some-lib';
 *
 */

export const App = () => {
  useEffect(() => {
    // App is ready, show the page
    document.body.classList.remove("tb-hidden");
  });

  return (
    <React.Fragment>
      <h1 className="tb-intro-item">
        &#9733; Standalone React Testbed &#9733;
      </h1>
      <pre>Your Code Here</pre>
    </React.Fragment>
  );
};
