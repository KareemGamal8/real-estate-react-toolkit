import { Flex, Grid, Text } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

export default function PropertyFeaturedDetails({
  features,
  title,
}: {
  features: string[];
  title: string;
}) {
  return (
    <Flex direction="column" gap="0.8rem">
      <Text fw={600} component="p" fz="0.9rem">
        {title}
      </Text>
      <Grid gutter={20}>
        {features.map((feature: string, index) => (
          <Grid.Col span={{ base: 6, sm: 3 }} key={index}>
            <Flex gap="0.3rem" align="center">
              <IconCircleCheck size={18} color="#9ca6ff" />
              <Text component="p" fw={500} fz="0.8rem" c="gray.7">
                {feature}
              </Text>
            </Flex>
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
