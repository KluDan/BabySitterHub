import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "./store";
import "./firebase";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";

import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Favorites from "./pages/Favorites";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/BabySitterHub",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/BabySitterHub", element: <HomePage /> },
      {
        path: "/BabySitterHub/nannies",

        lazy: async () => {
          let { Catalog } = await import("./pages/Catalog");
          return { Component: Catalog };
        },
      },
      {
        path: "/BabySitterHub/favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
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
