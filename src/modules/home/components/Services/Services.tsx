import { Box, Container, Flex, Grid, Text, Title } from "@mantine/core";
import SectionTitle from "../../../../design-system/components/SectionTitle";
import { servicesData } from "../../data";

export default function Services() {
  return (
    <Box py="8rem">
      <Container size="xl">
        <SectionTitle
          title="our services"
          subtitle="properties listing"
          overlayTitle="top"
        />
        <Grid gutter={40}>
          {servicesData.map((service, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4, sm: 6 }}>
              <Flex gap="1rem" align="start">
                <service.icon size={60} stroke={0.9} color="#9ca6ff" />
                <Flex pt="0.5rem" direction="column" gap="0.1rem">
                  <Title order={4}>{service.title}</Title>
                  <Text span c="dark.2">
                    {service.description}
                  </Text>
                </Flex>
              </Flex>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
