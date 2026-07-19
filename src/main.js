import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/globals.css";
import App from "./App";
import QueryProvider from "./app/providers/QueryProvider";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(QueryProvider, { children: _jsx(App, {}) }) }));
