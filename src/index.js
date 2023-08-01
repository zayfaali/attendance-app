import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { AdminProvider } from "./contexts/admin.context";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
