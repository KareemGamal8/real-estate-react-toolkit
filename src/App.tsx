import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import BaseLayout from "../src/design-system/layouts/BaseLayout";
import theme from "../src/design-system/utils/theme";
import "./index.css";
import LoginPage from "./modules/account/pages/LoginPage";
import RegisterPage from "./modules/account/pages/RegisterPage";
import HomePage from "./modules/home/HomePage";
import { setUser } from "./slices/userSlice";
import store, { persistor } from "./store";

function Root() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetch(
          "https://real-estate-server-ctvu.onrender.com/users",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include the access token
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const userData = await response.json();

          dispatch(setUser(userData));
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, [dispatch]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  );
}

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

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications position="top-right" zIndex={1000} />
      <Provider store={store}>
        <Root />
      </Provider>
    </MantineProvider>
  );
}
