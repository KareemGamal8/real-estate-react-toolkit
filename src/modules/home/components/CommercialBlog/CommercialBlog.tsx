import { Carousel } from "@mantine/carousel";
import { Box, Container } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import PostCard from "../../../../design-system/components/PostCard";
import SectionTitle from "../../../../design-system/components/SectionTitle";
import { Post } from "../../../../design-system/types";

export default function CommercialBlog() {
  const { posts } = useSelector((state: any) => state.home.data);

  return (
    <Box pt="8rem" pb="4rem">
      <Container size="xl">
        <SectionTitle
          title="commercial blog"
          subtitle="news & blog"
          overlayTitle="top"
        />
        <Carousel
          slideSize={{ base: "100%", sm: "50%", lg: "33.3%" }}
          slideGap={40}
          loop
          pb="2rem"
          controlsOffset="-7rem"
          nextControlIcon={<IconChevronRight color="#9ca6ff" size={25} />}
          previousControlIcon={<IconChevronLeft color="#9ca6ff" size={25} />}
          align="start"
          slidesToScroll="auto"
        >
          {posts.map((post: Post) => (
            <Carousel.Slide key={post.id} mb="1rem">
              <PostCard post={post} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
