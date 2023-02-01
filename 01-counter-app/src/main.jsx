/* ESTE ES EL PUNTO DE ENTRADA DE LA APLICACIÓN */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="container mx-auto min-h-screen text-white py-10 px-4 text-center">
      <App />
      <FirstApp name="Juan Pablo" age={29} />
      <CounterApp value={10} />
    </main>
  </React.StrictMode>
);
