import { Box, Container } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import { getProperty } from "../../../../slices/propertiesSlice";
import { RootState } from "../../../../store";
import PropertyImagesCarousel from "../../components/PropertyImagesCarousel";

export default function PropertyDetailsPage() {
  const { property } = useSelector((state: RootState) => state.properties);

  const dispatch = useDispatch();

  const { propertyID } = useParams();

  useEffect(() => {
    dispatch(getProperty(propertyID));
  }, [dispatch, propertyID]);

  const propertyDetailsItems = [
    { title: "Properties", route: "/properties" },
    { title: property.name, route: `/properties/${property.id}` },
  ];

  return (
    <Box py="2rem" bg="gray.1" mih="100vh">
      <PropertyImagesCarousel property={property} />
      <Container size="xl" w="100%">
        <Breadcrumb items={propertyDetailsItems} />
      </Container>
    </Box>
  );
}
