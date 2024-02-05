import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import App from "./App.jsx";
import "./index.css";
import "./firebase";
import { store } from "./store/index";

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
      {
        path: "/BabySitterHub/login",
        element: <LoginPage />,
      },
      {
        path: "/BabySitterHub/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
