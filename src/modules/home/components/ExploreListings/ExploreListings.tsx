import { Box, Flex, Grid, Text, Title, UnstyledButton } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { listingsData } from "../../data";
import "../style.css";

export default function ExploreListings() {
  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <Grid gutter={0}>
      {listingsData.map((list, index) => (
        <Grid.Col span={{ base: 12, lg: 4, xl: 2.4, sm: 6 }} key={index}>
          <Flex
            className="list-card"
            justify="center"
            align="center"
            h={isMobile ? "25rem" : "30rem"}
            px={25}
            py="6rem"
            pos="relative"
          >
            <Box
              className="list-card-overlay"
              pos="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="gray.0"
            ></Box>
            <Flex
              pos="relative"
              direction="column"
              h="100%"
              m="auto"
              w="70%"
              justify="space-between"
            >
              <Title
                component="p"
                fz="12rem"
                c="gray.2"
                pos="absolute"
                top="30%"
                left="35%"
                className="list-number"
              >
                0{index + 1}
              </Title>
              <Flex gap="0.1rem" direction="column">
                <Text span c="gray.5" fz="0.9rem">
                  {list.subtitle}
                </Text>
                <Title fw={500} order={3} fz="2.5rem">
                  {list.title}
                </Title>
              </Flex>
              <UnstyledButton
                className="list-card-button"
                c="gray.5"
                tt="uppercase"
                fw={500}
                mt="auto"
                lts="4.5px"
              >
                <Title order={6}>Read More</Title>
              </UnstyledButton>
            </Flex>
          </Flex>
        </Grid.Col>
      ))}
    </Grid>
  );
}
