import { Flex, Text } from "@mantine/core";

export default function Copyright() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Flex justify="center" align="center" p="1rem">
      <Text component="p" c="palePurple.2">
        All rights reserved @{year}
      </Text>
    </Flex>
  );
}
