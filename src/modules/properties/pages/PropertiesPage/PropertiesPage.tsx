import { Box, Container } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import { propertiesItems } from "../../../../design-system/components/Breadcrumb/items";
import PaginationList from "../../../../design-system/components/PaginationList";
import { getProperties } from "../../../../slices/propertiesSlice";
import PropertiesList from "../../components/PropertiesList";

export default function PropertiesPage() {
  const [searchParams] = useSearchParams();

  const { properties, loading } = useSelector((state: any) => state.properties);

  const dispatch = useDispatch();

  const pageNumber = searchParams.get("_page");


  useEffect(() => {
    dispatch(getProperties(pageNumber || 1));
  }, []);

  return (
    <>
      <Box py="2rem" bg="gray.1" mih="50vh">
        <Container size="xl" w="100%">
          <Breadcrumb items={propertiesItems} />
          <PropertiesList properties={properties} loading={loading} />
        </Container>
      </Box>
      <PaginationList total={4} />
    </>
  );
}
