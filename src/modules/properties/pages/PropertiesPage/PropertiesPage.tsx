import { Box, Container } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import { propertiesItems } from "../../../../design-system/components/Breadcrumb/items";
import PaginationList from "../../../../design-system/components/PaginationList";
import {
  getProperties,
  resetProperties,
} from "../../../../slices/propertiesSlice";
import NoPropertiesFound from "../../components/NoPropertiesFound";
import PropertiesList from "../../components/PropertiesList";
import SearchPropertiesForm from "../../components/SearchPropertiesForm";

export default function PropertiesPage() {
  const { properties, loading, searchQuery } = useSelector(
    (state: any) => state.properties
  );

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get("_page");

  useEffect(() => {
    dispatch(getProperties(pageNumber || 1));
  }, [dispatch, pageNumber, searchQuery]);

  // Reset action on component amount
  useEffect(() => {
    return () => {
      dispatch(resetProperties());
    };
  }, [dispatch]);

  if (!loading && properties.length === 0) {
    return <NoPropertiesFound />;
  }

  return (
    <>
      <Box py="2rem" bg="gray.1" mih="50vh">
        <Container size="xl" w="100%">
          <Breadcrumb items={propertiesItems} />
          <SearchPropertiesForm />
          <PropertiesList properties={properties} loading={loading} />
        </Container>
        <PaginationList total={4} />
      </Box>
    </>
  );
}
