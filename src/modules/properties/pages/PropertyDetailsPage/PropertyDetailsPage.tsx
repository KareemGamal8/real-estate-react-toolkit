import { Box, Center, Container, Flex, Loader } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PropertyImagesCarousel from "../../../../../PropertyImagesCarousel";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import { getProperty } from "../../../../slices/propertiesSlice";
import { RootState } from "../../../../store";
import PropertyFeaturedSection from "../../components/PropertiesFeaturedSection/PropertiesFeaturedSection";
import PropertyDescriptionSection from "../../components/PropertyDescriptionSection";
import PropertyDetailsSection from "../../components/PropertyDetailsSection";
import PropertyTitle from "../../components/PropertyTitle";

export default function PropertyDetailsPage() {
  const { property, loading } = useSelector(
    (state: RootState) => state.properties
  );

  const dispatch = useDispatch();

  const { propertyID } = useParams();

  useEffect(() => {
    dispatch(getProperty(propertyID));
  }, [dispatch, propertyID]);

  const propertyDetailsItems = [
    { title: "Properties", route: "/properties" },
    { title: property.name, route: `/properties/${property.id}` },
  ];

  if (loading) {
    return (
      <Center w="100%" mih="50vh">
        <Loader color="purple.3" size="xl" />
      </Center>
    );
  }

  return (
    <Box pb="2rem" bg="gray.1" mih="100vh">
      <PropertyImagesCarousel property={property} />
      <Container size="xl" w="100%">
        <Flex direction="column" gap="1.5rem">
          <Breadcrumb items={propertyDetailsItems} />
          <PropertyTitle />

          <PropertyDescriptionSection />
          <PropertyDetailsSection />
          <PropertyFeaturedSection />
        </Flex>
      </Container>
    </Box>
  );
}
