import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");
if (!rootEl) {
  document.body.innerHTML = '<h1 style="color:red">ROOT NOT FOUND</h1>';
} else {
  try {
    createRoot(rootEl).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (e: any) {
    rootEl.innerHTML = '<div style="padding:20px;color:red;font-family:monospace"><h2>REACT ERROR</h2><pre>' + e.message + '\n' + e.stack + '</pre></div>';
  }
}
