import { Divider, Drawer, Flex, Image, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMenu2 } from "@tabler/icons-react";
import React from "react";
import logo from "../../../assets/images/logo.png";
import UnStyledLink from "../Link/Link";
import { navbarLinks, socialLinks } from "./data";
import "./style.module.css";

export default function HeaderDrawer() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <UnstyledButton onClick={open}>
        <IconMenu2 color="#39374d" size={26} />
      </UnstyledButton>
      <Drawer
        size="sm"
        opened={opened}
        onClose={close}
        title={
          <UnStyledLink to="/" fz="2rem" fw={700}>
            <Image src={logo} alt="logo" w={100} />
          </UnStyledLink>
        }
      >
        <Flex gap="1rem" direction="column" mt="2rem">
          {navbarLinks.map((link) => (
            <React.Fragment key={link.title}>
              <UnStyledLink
                onClick={close}
                fw={600}
                to={link.route}
                c="palePurple.9"
                fz="1.2rem"
              >
                {link.title}
              </UnStyledLink>
              <Divider />
            </React.Fragment>
          ))}
        </Flex>
        <Flex gap="1rem" mt="1rem">
          {socialLinks.map((link, index) => (
            <UnStyledLink to={link.route} key={index}>
              <Flex justify="center" align="center">
                <link.icon color="#39374d" size={25} />
              </Flex>
            </UnStyledLink>
          ))}
        </Flex>
      </Drawer>
    </>
  );
}
