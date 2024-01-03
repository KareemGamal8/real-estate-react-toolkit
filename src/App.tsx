import "@mantine/carousel/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "../src/design-system/layouts/BaseLayout";
import "./index.css";
import HomePage from "./modules/home/HomePage";
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
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  );
}
