import { Box, Container, Grid } from "@mantine/core";
import { useSelector } from "react-redux";
import SectionTitle from "../../../../design-system/components/SectionTitle";
import { Property } from "../../../../design-system/types";
import PropertyGridCard from "../../../properties/components/PropertyGridCard";
import "../style.css";

export default function LatestProperties() {
  const { latestProperties } = useSelector((state: any) => state.home.data);

  return (
    <Box bg="gray.1" py="8rem">
      <Container size="xl">
        <SectionTitle
          title="latest properties"
          subtitle="properties listing"
          overlayTitle="Hot"
        />
        <Grid gutter={40}>
          {latestProperties.map((property: Property) => (
            <Grid.Col key={property.id} span={{ base: 12, sm: 6, md: 4 }}>
              <PropertyGridCard property={property} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
