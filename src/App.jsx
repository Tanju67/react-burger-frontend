import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import HomePage from "./page/HomePage";
import MenuPage from "./page/MenuPage";
import ErrorPage from "./page/ErrorPage";
import MenuDetailPage from "./page/MenuDetailPage";
import OrderPage from "./page/OrderPage";
import OrderConfirmPage from "./page/OrderConfirmPage";
import OrderHistoryPage from "./page/OrderHistoryPage";
import AdminPage from "./page/AdminPage";

import BoardMenuPage from "./page/BoardMenuPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import BoardProductPage from "./page/BoardProductPage";
import MenuProductsPage from "./page/MenuProductsPage";

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
          {
            path: "confirm",
            element: <OrderConfirmPage />,
          },
        ],
      },
      {
        path: "order-history",
        element: <OrderHistoryPage />,
      },
      {
        path: "dashboard",
        element: <AdminPage />,
        children: [
          {
            path: "menus",
            element: <BoardMenuPage />,
          },
          {
            path: "products",
            children: [
              {
                index: true,
                element: <BoardProductPage />,
              },
              {
                path: ":id",
                element: <MenuProductsPage />,
              },
            ],
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
