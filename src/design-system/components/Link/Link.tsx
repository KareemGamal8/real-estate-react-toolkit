import { Anchor, AnchorProps } from "@mantine/core";
import { Link, LinkProps } from "react-router-dom";

export function UnStyledLink(
  props: Omit<AnchorProps, "component"> & LinkProps
) {
  return <Anchor {...props} unstyled component={Link} td="none" />;
}
