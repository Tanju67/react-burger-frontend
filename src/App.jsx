import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import HomePage from "./page/HomePage";
import MenuPage from "./page/MenuPage";
import ErrorPage from "./page/ErrorPage";
import MenuDetailPage from "./page/MenuDetailPage";
import OrderPage from "./page/OrderPage";

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
            children: [
              {
                index: true,
                element: <MenuDetailPage />,
              },
              {
                path: "order/:id",
                element: <OrderPage />,
              },
            ],
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
