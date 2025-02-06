import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { App } from "./App";
import { AboutRoute } from "./routes/about";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/about" element={<AboutRoute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
