import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const Container = document.getElementById("root");
const root = createRoot(Container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
