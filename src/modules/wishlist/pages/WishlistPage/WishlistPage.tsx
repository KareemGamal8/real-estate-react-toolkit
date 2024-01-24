import { Box, Container, Grid, Title } from "@mantine/core";
import NoPropertiesFound from "../../../properties/components/NoPropertiesFound";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import { wishlistItems } from "../../../../design-system/components/Breadcrumb/items";
import { RootState } from "../../../../store";
import PropertyGridCard from "../../../properties/components/PropertyGridCard";

export default function WishlistPage() {
  const { properties } = useSelector((state: RootState) => state.wishlist);

  if (properties.length === 0) {
    return <NoPropertiesFound />;
  }

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <Box py="2rem">
        <Container size="xl" w="100%">
          <Breadcrumb items={wishlistItems} />
          <Title order={2} my="1.5rem">
            Wishlist
          </Title>
          <Grid>
            {properties.map((property) => (
              <Grid.Col key={property.id} span={{ base: 12, md: 4, sm: 6 }}>
                <PropertyGridCard property={property} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
