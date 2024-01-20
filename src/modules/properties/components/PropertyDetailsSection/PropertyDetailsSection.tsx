import { Accordion, Box, Flex, Grid, Text, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import classes from "../style.module.css";

type PropertyDetailsTypes = {
  title: string;
  value: number | string;
};

export default function PropertyDetailsSection() {
  const { property } = useSelector((state: RootState) => state.properties);

  const propertyDetailsData: PropertyDetailsTypes[] = [
    {
      title: "Property ID",
      value: `#${property.id}`,
    },
    {
      title: "Property price",
      value:
        property.type === "sale"
          ? `${property.price}$`
          : `${property.price}$ per month`,
    },
    {
      title: "Property size",
      value: property.size,
    },
    {
      title: "Property type",
      value: property.type,
    },
    {
      title: "Property floors",
      value: property.floors,
    },
    {
      title: "Property year built",
      value: property.yearBuilt,
    },
    {
      title: "Property bedrooms",
      value: property.bedrooms,
    },
    {
      title: "Property bathrooms",
      value: property.bathrooms,
    },
    {
      title: "Available",
      value: property.isAvailable ? "Available" : "Unavailable",
    },
  ];

  return (
    <Box bg="gray.0" className={classes.section_wrapper}>
      <Accordion variant="filled">
        <Accordion.Item value="details">
          <Accordion.Control>
            <Title order={4}>Details</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Grid gutter={30}>
              {propertyDetailsData.map(
                (property: PropertyDetailsTypes, index) => (
                  <Grid.Col key={index} span={{base:12, xs:6}}>
                    <Flex gap="0.3rem" align="baseline">
                      <Text component="p" fw={600}>
                        {property.title}:
                      </Text>
                      <Text component="p" fw={500} fz="0.9rem" c="gray.7" tt="capitalize">
                        {property.value}
                      </Text>
                    </Flex>
                  </Grid.Col>
                )
              )}
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
}
