import { Box, Container, Grid } from "@mantine/core";
import { useSelector } from "react-redux";
import ProductGridCard from "../../../../design-system/components/ProductGridCard";
import SectionTitle from "../../../../design-system/components/SectionTitle";
import { Property } from "../../../../design-system/types";
import "../style.css";

export default function LatestProperties() {
  const { latestProperties } = useSelector((state: any) => state.home.data);

  return (
    <Box bg="gray.1" py="8rem">
      <Container size="xl" h="100%">
        <SectionTitle
          title="latest properties"
          subtitle="properties listing"
          overlayTitle="Hot"
        />
        <Grid gutter={40}>
          {latestProperties.map((property: Property) => (
            <Grid.Col key={property.id} span={{ base: 12, sm: 6, md: 4 }}>
              <ProductGridCard property={property} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
