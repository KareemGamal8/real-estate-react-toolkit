import { Flex, Text, Title } from "@mantine/core";

export default function SectionTitle({
  overlayTitle,
  title,
  subtitle,
}: {
  overlayTitle: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Flex
      mb="1.5rem"
      gap="0.1rem"
      direction="column"
      pos="relative"
      align="center"
    >
      <Title
        order={2}
        fz="10rem"
        c="gray.2"
        pos="absolute"
        top="-78%"
        tt="uppercase"
        m={0}
        style={{ zIndex: 1 }}
      >
        {overlayTitle}
      </Title>
      <Flex
        direction="column"
        gap="0.1rem"
        style={{ zIndex: 2 }}
        justify="center"
        align="center"
      >
        <Text span c="dark.5" fz="0.9rem" tt="uppercase">
          {subtitle}
        </Text>
        <Title fw={600} order={3} fz="3.5rem" tt="uppercase">
          {title}
        </Title>
      </Flex>
    </Flex>
  );
}
