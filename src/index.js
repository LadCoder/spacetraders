import React from "react";
import ReactDOM from "react-dom";

import './index.css';

const App = () => {
  return (
    <div>
        <h1>Spacetraders UI</h1>
        <p>A frontend UI for the Spacetraders API game.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));