import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  Indicator,
  Text,
} from "@mantine/core";
import { IconBrandWhatsapp, IconHeart, IconMail } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import logo from "../../../assets/images/logo.png";
import { RootState } from "../../../store";
import  UnStyledLink  from "../Link/Link";
import HeaderDrawer from "./HeaderDrawer";
import UserMenuButton from "./UserMenuButton";

export default function MobileHeader() {
  const { properties } = useSelector((state: RootState) => state.wishlist);

  return (
    <>
      <Box bg="palePurple.9">
        <Container size="xl">
          <Flex justify="space-between">
            <Flex gap="0.4rem" align="center" p={10}>
              <IconMail color="#fff" size={20} />
              <Text span c="gray.0" fw={600} fz="0.8rem">
                contact@mail.com
              </Text>
            </Flex>
            <Divider orientation="vertical" size="xs" color="dark.4" />
            <Flex gap="0.4rem" align="center" p={10}>
              <IconBrandWhatsapp color="#fff" size={20} />
              <Text span c="gray.0" fw={600} fz="0.8rem">
                +1 408 111 1234
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Container size="xl" w="100%">
        <Flex justify="space-between" align="center" px="1.5em" py="1rem">
          <UnStyledLink to="/" fz="2rem" fw={700}>
            <Image src={logo} alt="logo" w={120} />
          </UnStyledLink>
          <Flex gap="1.5rem" align="center">
            <Indicator
              label={properties.length}
              disabled={properties.length === 0}
              size={18}
              radius="xl"
              color="purple.3"
              fw={600}
            >
              <UnStyledLink to="/wishlist">
                <IconHeart color="#39374d" size={26} />
              </UnStyledLink>
            </Indicator>
            <UserMenuButton />
            <HeaderDrawer />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
