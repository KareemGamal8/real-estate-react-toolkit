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
import { UnStyledLink } from "../Link/Link";
import UserMenuButton from "./UserMenuButton";
import { navbarLinks, socialLinks } from "./data";

export default function MainHeader() {
  const { properties } = useSelector((state: RootState) => state.wishlist);

  return (
    <Box>
      <Box bg="palePurple.9">
        <Container size="xl">
          <Flex align="center" justify="space-between">
            <Flex>
              <Divider orientation="vertical" size="xs" color="dark.4" />
              {socialLinks.map((link, index) => (
                <Flex key={index}>
                  <UnStyledLink to={link.route} p={12}>
                    <Flex justify="center" align="center">
                      <link.icon color="#fff" size={20} />
                    </Flex>
                  </UnStyledLink>
                  <Divider orientation="vertical" size="xs" color="dark.4" />
                </Flex>
              ))}
            </Flex>
            <Flex>
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
          </Flex>
        </Container>
      </Box>
      <Box top={0} style={{ zIndex: 9 }}>
        <Container size="xl">
          <Flex justify="space-between" align="center" px="1.5rem" py="1rem">
            <UnStyledLink to="/" fz="2rem" fw={700}>
              <Image src={logo} alt="logo" w={120} />
            </UnStyledLink>
            <Flex gap="1.5rem" align="center">
              {navbarLinks.map((link) => (
                <UnStyledLink
                  className="navbar-link"
                  p="0.2rem 0.5rem"
                  fw={600}
                  to={link.route}
                  key={link.title}
                  c="palePurple.9"
                  fz="1rem"
                >
                  {link.title}
                </UnStyledLink>
              ))}
            </Flex>
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
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
