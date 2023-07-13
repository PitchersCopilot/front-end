import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "./index.css";

// TODO: This should render the router component
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
