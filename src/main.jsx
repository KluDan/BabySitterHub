import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import Catalog from "./pages/Catalog.jsx";
import Home from "./pages/HomePage/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import App from "./App.jsx";
import "./firebase";
import { store } from "./store/index";
import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import Favourites from "./pages/Favourites.jsx";

const router = createBrowserRouter([
  {
    path: "/BabySitterHub",
    element: <App />,
    children: [
      { path: "/BabySitterHub", element: <Home /> },
      {
        path: "/BabySitterHub/nannies",
        lazy: () => import("./pages/Catalog"),
      },
      {
        path: "/BabySitterHub/favourites",
        lazy: () => import("./pages/Favourites"),
      },
      { path: "*", element: <Navigate to="/BabySitterHub" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<>loading</>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
