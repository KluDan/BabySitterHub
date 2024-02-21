import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from "./store";
import "./firebase";
import { GlobalStyle } from "./GlobalStyles";
import { theme } from "./theme";

import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import { Favorites } from "./pages/Favorites";

import { Catalog } from "./pages/Catalog";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./components/AuthProvider";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/BabySitterHub", element: <HomePage /> },
       { path: "/BabySitterHub/", element: <HomePage /> },
      {
        path: "/BabySitterHub/nannies",
        element: <Catalog />,
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
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
