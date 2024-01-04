import { Card, Flex, Image, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { Post } from "../../types";
import { readMoreChars } from "../../utils/readMoreChars";
import { UnStyledLink } from "../Link/Link";
import classes from "./style.module.css";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card shadow="md" classNames={classes}>
      <Card.Section p="0.5rem" h={230}>
        <UnStyledLink to="">
          <Image src={post.image} radius="xs" alt={post.title} />
        </UnStyledLink>
      </Card.Section>
      <Flex direction="column" gap="0.5rem" p="0.5rem 0.3rem" mt="0.7rem">
        <UnStyledLink
          to=""
          c="dark.9"
          fz="1rem"
          h="3.5rem"
          fw={600}
          className={classes.post_title}
        >
          {readMoreChars(post.title, 10)}
        </UnStyledLink>
        <Text span fz="0.8rem" c="dark.2">
          {post.createdAt}
        </Text>
        <Text fz="0.9rem" c="dark.2" component="p">
          {readMoreChars(post.description, 20)}
        </Text>
        <UnStyledLink to="" mt="1rem" className={classes.reading_button}>
          <Flex align="end">
            <Text span fz="0.8rem" fw={600}>
              Continue Reading
            </Text>
            <IconChevronRight size={16} />
          </Flex>
        </UnStyledLink>
      </Flex>
    </Card>
  );
}
