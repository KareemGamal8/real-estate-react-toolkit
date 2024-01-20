import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Property } from "../../../../design-system/types";

export default function PropertyImagesCarousel({ property }: { property: Property }) {
  return (
    <Carousel
      withIndicators
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap="xs"
      loop
      align="start"
      slidesToScroll={1}
      nextControlIcon={<IconChevronRight color="#fff" size={35} />}
      previousControlIcon={<IconChevronLeft color="#fff" size={35} />}
    >
      {property.images.map((image, index) => (
        <Carousel.Slide key={index}>
          <Box w="100%">
            <img src={image} width="100%" alt={property.name} />
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
