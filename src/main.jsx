import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Approvider } from "./Components/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Approvider>
      <App />
    </Approvider>
  </React.StrictMode>
);
