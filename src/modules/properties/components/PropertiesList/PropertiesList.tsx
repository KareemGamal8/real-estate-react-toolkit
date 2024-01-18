import { Center, Flex, Grid, Loader, Title } from "@mantine/core";
import PropertyGridCard from "../../../../design-system/components/PropertyGridCard";
import { Property } from "../../../../design-system/types";

export default function PropertiesList({
  properties,
  loading,
}: {
  properties: Property[];
  loading: boolean;
}) {
  return (
    <Flex direction="column" gap="1rem">
      <Title order={2} fz="2.5rem">
        Properties List
      </Title>
      <Grid>
        {loading ? (
          <Center w="100%" mih="50vh">
            <Loader color="purple.3" size="xl" />
          </Center>
        ) : (
          properties.map((property) => (
            <Grid.Col key={property.id} span={{ base: 12, md: 4, sm: 6 }}>
              <PropertyGridCard property={property} />
            </Grid.Col>
          ))
        )}
      </Grid>
    </Flex>
  );
}
