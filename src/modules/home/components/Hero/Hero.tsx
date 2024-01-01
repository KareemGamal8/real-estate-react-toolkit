import { Flex, Title } from "@mantine/core";
import { PrimaryButton } from "../../../../design-system/components/Buttons/PrimaryButton";
import { SecondaryButton } from "../../../../design-system/components/Buttons/SecondaryButton";
import { UnStyledLink } from "../../../../design-system/components/Link/Link";
import "../style.css";

export default function Hero() {
  return (
    <Flex
      pos="relative"
      className="hero-wrapper"
      mih="85vh"
      direction="column"
      justify="center"
      align="center"
      ta="center"
    >
      <Flex
        className="hero-content"
        direction="column"
        gap="1.5rem"
        align="center"
      >
        <Title order={1} c="gray.0" fz="4.5rem" tt="uppercase">
          Find your
          <br />
          dream home
        </Title>
        <Flex align="center">
          <Flex align="center" gap="0.3rem">
            <UnStyledLink to="">
              <PrimaryButton size="md" w="8rem">
                For Sale
              </PrimaryButton>
            </UnStyledLink>
            <UnStyledLink to="">
              <SecondaryButton size="md" w="8rem">
                For Rent
              </SecondaryButton>
            </UnStyledLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
