import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "../../compoennts/Footer";
import Header from "../../compoennts/Header";

export default function BaseLayout() {
  return (
    <Flex direction="column" mih="100vh">
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  );
}
