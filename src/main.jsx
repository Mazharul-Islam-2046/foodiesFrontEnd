import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider";
import DataProvider from "./providers/DataProvider";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
