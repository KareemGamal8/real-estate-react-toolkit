import { Box, Container, Flex } from "@mantine/core";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import Loader from "../../../../design-system/components/Loader";
import { getProperty } from "../../../../slices/propertiesSlice";
import { RootState } from "../../../../store";
import PropertyFeaturedSection from "../../components/PropertiesFeaturedSection/PropertiesFeaturedSection";
import PropertyDescriptionSection from "../../components/PropertyDescriptionSection";
import PropertyDetailsSection from "../../components/PropertyDetailsSection";
import PropertyImagesCarousel from "../../components/PropertyImagesCarousel";
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
    return <Loader />;
  }

  if (!property) return;

  return (
    <>
      <Helmet>
        <title>{property.name}</title>
      </Helmet>
      <Box pb="2rem" bg="gray.1" mih="100vh">
        <PropertyImagesCarousel />
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
    </>
  );
}
