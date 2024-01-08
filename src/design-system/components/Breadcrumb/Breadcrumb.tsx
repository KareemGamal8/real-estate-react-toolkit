import { Breadcrumbs } from "@mantine/core";
import { UnStyledLink } from "../Link/Link";
import classes from "./style.module.css";

export default function Breadcrumb({
  items,
}: {
  items: { title: string; route: string }[];
}) {
  return (
    <Breadcrumbs mb="1rem" separator="→" classNames={classes}>
      <UnStyledLink to="/" className={classes.link}
      fz="0.9rem">
        Home
      </UnStyledLink>
      {items.map((item, index) => (
        <UnStyledLink
        fz="0.9rem"
          to={item.route}
          key={index}
          className={
            index === items.length - 1 ? classes.activeLink : classes.link
          }
        >
          {item.title}
        </UnStyledLink>
      ))}
    </Breadcrumbs>
  );
}
