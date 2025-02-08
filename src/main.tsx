import React from "react";
import 'antd/dist/reset.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CheckoutProvider } from "./context/Checkout/CheckoutContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <CheckoutProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CheckoutProvider>
  </React.StrictMode>
);