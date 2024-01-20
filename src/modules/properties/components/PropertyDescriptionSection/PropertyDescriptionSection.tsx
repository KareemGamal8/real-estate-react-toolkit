import { Flex, Text, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import classes from "../style.module.css";

export default function PropertyDescriptionSection() {
  const { property } = useSelector((state: RootState) => state.properties);

  return (
    <Flex
      bg="gray.0"
      gap="0.5rem"
      direction="column"
      className={classes.section_wrapper}
    >
      <Title order={4}>Description</Title>
      <Text component="p" c="gray.6">
        {property.description}
      </Text>
    </Flex>
  );
}
