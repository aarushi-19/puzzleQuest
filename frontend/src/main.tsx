import "@fontsource/inter";
import "@fontsource/playfair-display";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
// import "./assets/theme/theme.css";

import { GiftProvider } from "./context/GiftContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GiftProvider>
      <App />
    </GiftProvider>
  </React.StrictMode>
);