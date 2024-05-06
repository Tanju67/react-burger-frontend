import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "./shared/store/auth-actions";
import RootLayout from "./page/RootLayout";
import HomePage, { loader as homeMenuLoader } from "./page/HomePage";
import MenuPage, { loader as userMenuLoader } from "./page/MenuPage";
import ErrorPage from "./page/ErrorPage";
import MenuDetailPage, {
  loader as userProductsLoader,
} from "./page/MenuDetailPage";
import OrderPage, { loader as singleProductLoader } from "./page/OrderPage";
import OrderConfirmPage from "./page/OrderConfirmPage";
import OrderHistoryPage from "./page/OrderHistoryPage";
import AdminPage, { loader as menuLoader } from "./page/AdminPage";

import BoardMenuPage from "./page/BoardMenuPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import BoardProductPage from "./page/BoardProductPage";
import MenuProductsPage, {
  loader as productsLoader,
} from "./page/MenuProductsPage";
import MyCurrentOrderpage, {
  loader as currentOrderLoader,
} from "./page/MyCurrentOrderpage";
import MyOrderHistoryPage, {
  loader as orderHistoryLoader,
} from "./page/MyOrderHistoryPage";
import AdminOrderpage from "./page/AdminOrderpage";
import AdminNewOrderPage, {
  loader as newOrderLoader,
} from "./page/AdminNewOrderPage";
import AdminTodayOrderPage, {
  loader as todayOrderLoader,
} from "./page/AdminTodayOrderPage";
import OrderDetailPage, {
  loader as singleOrderLoader,
} from "./page/OrderDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeMenuLoader,
      },
      {
        path: "/menu",
        children: [
          {
            index: true,
            element: <MenuPage />,
            loader: userMenuLoader,
          },
          {
            path: ":id",
            children: [
              {
                index: true,
                element: <MenuDetailPage />,
                loader: userProductsLoader,
              },
              {
                path: "order/:id",
                element: <OrderPage />,
                loader: singleProductLoader,
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
        children: [
          {
            index: true,
            element: <MyCurrentOrderpage />,
            loader: currentOrderLoader,
          },
          {
            path: "history",
            element: <MyOrderHistoryPage />,
            loader: orderHistoryLoader,
          },
        ],
      },
      {
        path: "dashboard",
        element: <AdminPage />,
        loader: menuLoader,
        id: "menuloader",
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
                loader: productsLoader,
              },
            ],
          },
          {
            path: "orders",
            element: <AdminOrderpage />,
            children: [
              {
                index: true,
                element: <AdminNewOrderPage />,
                loader: newOrderLoader,
              },
              {
                path: "today",
                element: <AdminTodayOrderPage />,
                loader: todayOrderLoader,
              },
              {
                path: "detail/:id",
                element: <OrderDetailPage />,
                loader: singleOrderLoader,
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
