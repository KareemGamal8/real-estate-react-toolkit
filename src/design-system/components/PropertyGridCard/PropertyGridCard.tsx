import { Carousel } from "@mantine/carousel";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconArrowsMaximize,
  IconCamera,
  IconChevronLeft,
  IconChevronRight,
  IconHeart,
  IconMapPin,
  IconPlus,
  IconShare,
} from "@tabler/icons-react";
import { Property } from "../../types";
import { readMoreChars } from "../../utils/readMoreChars";
import { UnStyledLink } from "../Link/Link";
import classes from "./style.module.css";

export default function PropertyGridCard({ property }: { property: Property }) {
  return (
    <Card shadow="sm" classNames={classes}>
      <Card.Section pos="relative">
        {property.isFeatured && (
          <Badge
            style={{
              zIndex: 2,
            }}
            color="dark.0"
            radius="xs"
            size="md"
            pos="absolute"
            top="7%"
            left="5%"
          >
            Featured
          </Badge>
        )}
        <Badge
          style={{
            zIndex: 2,
          }}
          color="purple.2"
          radius="xs"
          size="md"
          pos="absolute"
          top="7%"
          right="5%"
        >
          {property.type === "sale" ? "For Sale" : "For Rent"}
        </Badge>
        <Flex
          pos="absolute"
          bottom={0}
          justify="space-between"
          align="center"
          left={0}
          w="100%"
          bg="transparent"
          style={{ zIndex: 2 }}
          p="0.4rem 1.2rem"
        >
          <Flex align="center" gap="0.2rem">
            <IconMapPin color="#fff" size={20} />
            <Text span c="gray.0" fz="0.8rem" fw={600}>
              {property.address.split(",")[0]}
            </Text>
          </Flex>
          <Flex align="center" gap="0.2rem">
            <IconCamera color="#fff" size={20} />
            <Text span c="gray.0" fz="0.8rem" fw={600}>
              {property.images.length}
            </Text>
          </Flex>
        </Flex>
        <Carousel
          height={230}
          pos="relative"
          loop
          classNames={classes}
          nextControlIcon={<IconChevronRight color="#fff" size={35} />}
          previousControlIcon={<IconChevronLeft color="#fff" size={35} />}
        >
          {property.images.map((image, index) => (
            <Carousel.Slide key={index} pos="relative">
              <UnStyledLink to={"/properties/" + property.id}>
                <Box
                  pos="absolute"
                  w="100%"
                  h="100%"
                  className={classes.slide_overlay}
                ></Box>
                <Image src={image} w="100%" h={250} alt="No way!" />
              </UnStyledLink>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Card.Section>
      <Box>
        <Flex direction="column" gap="0.5rem" p="0.5rem 0.3rem">
          <UnStyledLink to="" c="dark.9" fz="1.5rem" fw={600}>
            {property.name}
          </UnStyledLink>
          <Text component="p" fz="1rem" fw={600} c="purple.2">
            {property.type === "sale"
              ? `${property.price}$`
              : `From ${property.price} per Month`}
          </Text>
          <Text component="p" c="dark.3" fz="0.9rem">
            {readMoreChars(property.description, 10)}
          </Text>
          <Flex gap="0.1rem" align="end">
            <IconArrowsMaximize size={20} stroke={1.1} color="#696969" />
            <Text component="p" c="dark.3" fw={600} fz="0.8rem">
              {property.size.toLocaleString()} ft
            </Text>
          </Flex>
          <Divider my="0.5rem" color="gray.1" />
          <Flex justify="center" align="center" gap="0.5rem">
            <Tooltip
              transitionProps={{ transition: "skew-up", duration: 300 }}
              label="Share"
              fz="0.6rem"
              fw={600}
              withArrow
              className={classes.card_icon_button}
            >
              <Button
                variant="outline"
                color="gray.3"
                p={5}
                h="auto"
                radius="xs"
              >
                <IconShare size={17} />
              </Button>
            </Tooltip>
            <Tooltip
              transitionProps={{ transition: "skew-up", duration: 300 }}
              label="Wishlist"
              fz="0.6rem"
              fw={600}
              withArrow
              className={classes.card_icon_button}
            >
              <Button
                variant="outline"
                color="gray.3"
                p={5}
                h="auto"
                radius="xs"
              >
                <IconHeart size={17} />
              </Button>
            </Tooltip>
            <Tooltip
              transitionProps={{ transition: "skew-up", duration: 300 }}
              label="Compare"
              fz="0.6rem"
              fw={600}
              withArrow
              className={classes.card_icon_button}
            >
              <Button
                variant="outline"
                color="gray.3"
                p={5}
                h="auto"
                radius="xs"
              >
                <IconPlus size={17} stroke={3} />
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
}
