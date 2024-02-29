import { Menu, UnstyledButton } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons-react";
import UnStyledLink from "../Link/Link";
import classes from "./style.module.css";

export default function UserMenuButton() {
  return (
    <Menu
      width={120}
      transitionProps={{ transition: "fade", duration: 150 }}
      classNames={classes}
    >
      <Menu.Target>
        <UnstyledButton>
          <IconUserCircle color="#39374d" size={26} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <UnStyledLink to="/account/login">
          <Menu.Item fw={600} fz="0.9ren">
            Login
          </Menu.Item>
        </UnStyledLink>
        <Menu.Divider />
        <UnStyledLink to="/account/register">
          <Menu.Item fw={600} fz="0.9ren">
            Register
          </Menu.Item>
        </UnStyledLink>
      </Menu.Dropdown>
    </Menu>
  );
}
