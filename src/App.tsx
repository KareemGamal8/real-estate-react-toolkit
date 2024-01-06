import "@mantine/carousel/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import BaseLayout from "../src/design-system/layouts/BaseLayout";
import "./index.css";
import LoginPage from "./modules/account/pages/LoginPage";
import RegisterPage from "./modules/account/pages/RegisterPage";
import HomePage from "./modules/home/HomePage";
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
    ],
  },
]);

const theme = createTheme({
  headings: { fontFamily: "Rajdhani, Sans-serif" },
  colors: {
    purple: [
      "#e9edff",
      "#cfd5ff",
      "#9ca6ff",
      "#6575fe",
      "#394bfd",
      "#1e31fd",
      "#0e23fe",
      "#0018e3",
      "#0014cb",
      "#000fb3",
    ],
    palePurple: [
      "#f3f3f6",
      "#e4e4e6",
      "#c6c6cf",
      "#a7a6b7",
      "#8d8aa2",
      "#7d7996",
      "#747191",
      "#63607e",
      "#575472",
      "#39374d",
    ],
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </MantineProvider>
  );
}
