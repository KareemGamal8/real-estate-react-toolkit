import { Anchor, Box, Divider, Flex, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { socialLinks } from "./data";
import "./style.css";

export default function TopHeader() {
  return (
    <Box bg="palePurple.9">
      <Flex mx="2.5rem" align="center" justify="space-between">
        <Flex>
          <Divider orientation="vertical" size="xs" color="dark.4" />
          {socialLinks.map((link, index) => (
            <Flex>
              <Anchor component={Link} to={link.route} key={index} p={12}>
                <Flex justify="center" align="center">
                  <link.icon color="#fff" size={20} />
                </Flex>
              </Anchor>
              <Divider orientation="vertical" size="xs" color="dark.4" />
            </Flex>
          ))}
        </Flex>
        <Flex className="header-contact">
          <Flex gap="0.4rem" align="center" p={10}>
            <IconMail color="#fff" size={20} />
            <Text span c="gray.0">
              contact@mail.com
            </Text>
          </Flex>
          <Divider orientation="vertical" size="xs" color="dark.4" />
          <Flex gap="0.4rem" align="center" p={10}>
            <IconMail color="#fff" size={20} />
            <Text span c="gray.0">
              contact@mail.com
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
