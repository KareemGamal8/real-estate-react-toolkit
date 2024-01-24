import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import BaseLayout from "../src/design-system/layouts/BaseLayout";
import theme from "../src/design-system/utils/theme";
import "./index.css";
import LoginPage from "./modules/account/pages/LoginPage";
import RegisterPage from "./modules/account/pages/RegisterPage";
import HomePage from "./modules/home/HomePage";
import PropertiesPage from "./modules/properties/pages/PropertiesPage";
import PropertyDetailsPage from "./modules/properties/pages/PropertyDetailsPage";
import WishlistPage from "./modules/wishlist/pages/WishlistPage";
import store, { persistor } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,

        element: <HomePage />,
      },
      {
        path: "/account/login",
        element: <LoginPage />,
      },
      {
        path: "/account/register",
        element: <RegisterPage />,
      },
      {
        path: "/properties",
        element: <PropertiesPage />,
      },
      {
        path: "/properties/:propertyID",
        element: <PropertyDetailsPage />,
      },
      {
        path: "/Wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" zIndex={1000} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </MantineProvider>
  );
}
