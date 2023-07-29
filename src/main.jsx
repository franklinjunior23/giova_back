import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="158100466679-5plmhukgskmcqm74dpj2u39l3anjr2gh.apps.googleusercontent.com">
      <App />
      <ToastContainer pauseOnHover={false} theme="light" />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
