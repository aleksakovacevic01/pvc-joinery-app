import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DayPickerProvider } from "react-day-picker";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DayPickerProvider initialProps={{}}>
        <App />
      </DayPickerProvider>
    </BrowserRouter>
  </StrictMode>
);
