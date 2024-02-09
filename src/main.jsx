import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "./store";
import "./firebase";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";

import Home from "./pages/HomePage/HomePage";

import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/BabySitterHub",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/BabySitterHub", element: <Home /> },
      {
        path: "/BabySitterHub/nannies",

        lazy: async () => {
          let { Catalog } = await import("./pages/Catalog");
          return { Component: Catalog };
        },
      },
      {
        path: "/BabySitterHub/favourites",
        lazy: async () => {
          let { Favourites } = await import("./pages/Favourites");
          return { Component: Favourites };
        },
      },
      /* { path: "*", element: <Navigate to="/BabySitterHub" replace /> }, */
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
