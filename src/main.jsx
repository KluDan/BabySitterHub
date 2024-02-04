import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Catalog from "../pages/Catalog.jsx";
import Home from "../pages/Home.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/BabySitterHub/",
    element: <App />,
    children: [
      {
        path: "/BabySitterHub/",
        element: <Home />,
      },
      {
        path: "/BabySitterHub/catalog",
        element: <Catalog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
