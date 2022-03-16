import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const isLoading = true;
ReactDOM.render(<App isLoading={isLoading} />, document.getElementById("root"));
