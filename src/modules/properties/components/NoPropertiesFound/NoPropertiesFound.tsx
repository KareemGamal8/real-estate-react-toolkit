import { Flex, Image, Title } from "@mantine/core";
import { useDispatch } from "react-redux";
import notFound from "../../../../assets/images/found-icon-28.jpg";
import { UnStyledLink } from "../../../../design-system/components/Link/Link";
import { setSearchQuery } from "../../../../slices/propertiesSlice";
import classes from "../style.module.css";

export default function NoPropertiesFound() {
  const dispatch = useDispatch();

  return (
    <Flex
      justify="center"
      align="center"
      gap="1rem"
      direction="column"
      my="4rem"
    >
      <Image src={notFound} alt="not found" w={200} />
      <Title order={2} fz="2.3rem">
        No Properties Found!
      </Title>
      <UnStyledLink
        to="/properties"
        c="gray.0"
        fz="1rem"
        fw={600}
        bg="purple.3"
        p="0.5rem 1rem"
        className={classes.continue_shopping}
        onClick={() => dispatch(setSearchQuery(""))}
      >
        Continue Shopping
      </UnStyledLink>
    </Flex>
  );
}
