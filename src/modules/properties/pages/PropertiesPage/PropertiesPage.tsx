import { Box, Container } from "@mantine/core";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../../../../design-system/components/Breadcrumb";
import { propertiesItems } from "../../../../design-system/components/Breadcrumb/items";
import Loader from "../../../../design-system/components/Loader";
import PaginationList from "../../../../design-system/components/PaginationList";
import {
  getProperties,
  resetProperties,
} from "../../../../slices/propertiesSlice";
import { RootState } from "../../../../store";
import NoPropertiesFound from "../../components/NoPropertiesFound";
import PropertiesList from "../../components/PropertiesList";
import SearchPropertiesForm from "../../components/SearchPropertiesForm";

export default function PropertiesPage() {
  const { properties, loading, filters } = useSelector(
    (state: RootState) => state.properties
  );

  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  const page = searchParams.get("_page");

  useEffect(() => {
    dispatch(getProperties({ page, filters }));
  }, [dispatch, page, filters]);

  // Reset action on component amount
  useEffect(() => {
    return () => {
      dispatch(resetProperties());
    };
  }, [dispatch]);

  if (!loading && properties.length === 0) {
    return <NoPropertiesFound />;
  }

  if (loading) return <Loader />;

  return(
    <>
      <Helmet>
        <title>Properties</title>
      </Helmet>
      <Box py="2rem" bg="gray.1">
        <Container size="xl" w="100%">
          <Breadcrumb items={propertiesItems} />
          <SearchPropertiesForm />
          <PropertiesList properties={properties} />
        </Container>
        <PaginationList total={4} />
      </Box>
    </>
  );
}
