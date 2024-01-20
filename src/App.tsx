import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import PropertyDetailsPage from "./modules/properties/pages/PropertyDetailsPage";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../src/design-system/layouts/BaseLayout";
import theme from "../src/design-system/utils/theme";
import "./index.css";
import LoginPage from "./modules/account/pages/LoginPage";
import RegisterPage from "./modules/account/pages/RegisterPage";
import HomePage from "./modules/home/HomePage";
import PropertiesPage from "./modules/properties/pages/PropertiesPage";
import store from "./store";

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
    ],
  },
]);

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" zIndex={1000} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  );
}
