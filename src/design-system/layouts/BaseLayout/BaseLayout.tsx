import { Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function BaseLayout() {
  return (
    <Flex direction="column" mih="100vh">
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  );
}
