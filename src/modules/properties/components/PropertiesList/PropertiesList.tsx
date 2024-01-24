import { Flex, Grid, Title } from "@mantine/core";
import { Property } from "../../../../design-system/types";
import PropertyGridCard from "../PropertyGridCard";

export default function PropertiesList({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <Flex direction="column" gap="1rem">
      <Title order={2} fz="2.5rem">
        Properties List
      </Title>
      <Grid>
        {properties.map((property) => (
          <Grid.Col key={property.id} span={{ base: 12, md: 4, sm: 6 }}>
            <PropertyGridCard property={property} />
          </Grid.Col>
        ))}
      </Grid>
    </Flex>
  );
}
