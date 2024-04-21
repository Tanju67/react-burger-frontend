import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import HomePage from "./page/HomePage";
import MenuPage from "./page/MenuPage";
import ErrorPage from "./page/ErrorPage";
import MenuDetailPage from "./page/MenuDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu",
        children: [
          {
            index: true,
            element: <MenuPage />,
          },
          {
            path: ":id",
            element: <MenuDetailPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
