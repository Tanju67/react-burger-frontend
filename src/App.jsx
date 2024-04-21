import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./page/RootLayout";
import HomePage from "./page/HomePage";
import MenuPage from "./page/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
