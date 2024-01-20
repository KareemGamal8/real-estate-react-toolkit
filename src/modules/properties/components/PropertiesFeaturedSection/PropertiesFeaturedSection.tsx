import { Accordion, Box, Flex, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import PropertyFeaturedDetails from "../PropertyFeaturedDetails";
import classes from "../style.module.css";

export default function PropertyFeaturedSection() {
  const { property } = useSelector((state: RootState) => state.properties);

  return (
    <Box bg="gray.0" className={classes.section_wrapper}>
      <Accordion variant="filled">
        <Accordion.Item value="features">
          <Accordion.Control>
            <Title order={4}>Features</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Flex direction="column" gap="1.8rem" mt="1rem">
              <PropertyFeaturedDetails
                title="Interior Details"
                features={property.otherFeatures}
              />
              <PropertyFeaturedDetails
                title="Outdoor Details"
                features={property.outdoorDetails}
              />
              <PropertyFeaturedDetails
                title="Utilities"
                features={property.utilities}
              />
            </Flex>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
