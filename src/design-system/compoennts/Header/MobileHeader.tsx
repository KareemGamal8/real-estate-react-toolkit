import { Box, Container, Divider, Flex, Image, Text } from "@mantine/core";
import {
  IconBrandWhatsapp,
  IconHeart,
  IconMail,
  IconUserBolt,
} from "@tabler/icons-react";
import logo from "../../../assets/images/logo.png";
import { UnStyledLink } from "../Link/Link";
import HeaderDrawer from "./HeaderDrawer";
import { socialLinks } from "./data";

export default function MobileHeader() {
  return (
    <>
      <Box bg="palePurple.9">
        <Container size="xl">
          <Flex
            align="center"
            justify="space-between"
            direction="column"
            gap="1rem"
          >
            <Flex className="header-contact">
              <Divider orientation="vertical" size="xs" color="dark.4" />
              {socialLinks.map((link, index) => (
                <Flex>
                  <UnStyledLink to={link.route} key={index} p={12}>
                    <Flex justify="center" align="center">
                      <link.icon color="#fff" size={20} />
                    </Flex>
                  </UnStyledLink>
                  <Divider orientation="vertical" size="xs" color="dark.4" />
                </Flex>
              ))}
            </Flex>
            <Flex className="header-contact">
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
      <Container size="xl" w="100%">
        <Flex justify="space-between" align="center" px="1.5em" py="1rem">
          <UnStyledLink to="/" fz="2rem" fw={700}>
            <Image src={logo} alt="logo" w={120} />
          </UnStyledLink>
          <Flex gap="1.5rem" align="center">
            <UnStyledLink to="/">
              <IconHeart color="#6575fe" size={26} />
            </UnStyledLink>
            <UnStyledLink to="/">
              <IconUserBolt color="#6575fe" size={26} />
            </UnStyledLink>
            <HeaderDrawer />
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
