import { Badge, Flex, Text, Title } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export default function PropertyTitle() {
  const { property } = useSelector((state: RootState) => state.properties);

  return (
    <Flex direction="column" gap="0.5rem">
      <Flex gap="0.5rem" align="center">
        <Badge color="purple.2" radius="xs" size="md">
          {property.type === "sale" ? "For Sale" : "For Rent"}
        </Badge>
        {property.isFeatured && (
          <Badge
            style={{
              zIndex: 2,
            }}
            color="dark.0"
            radius="xs"
            size="md"
          >
            Featured
          </Badge>
        )}
      </Flex>
      <Title order={2} fz="2.2rem">
        {property.name}
      </Title>
      <Flex gap="0.5rem" align="center">
        <IconMapPin size={18} />
        <Text span fz="0.8rem" c="gray.7" fw={500}>
          {property.address}
        </Text>
      </Flex>
    </Flex>
  );
}
