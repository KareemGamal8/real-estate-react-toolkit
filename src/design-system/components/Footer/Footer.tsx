import { Box, Container, Flex, Grid, Text, Title } from "@mantine/core";
import { UnStyledLink } from "../Link/Link";
import Copyright from "./Copyright";
import { companyData, contactData, quickLinksData, socialLinks } from "./data";
import "./style.css";

export default function Footer() {
  return (
    <Box bg="#232339" mt="auto">
      <Container size="xl" w="100%">
        <Grid py="2rem" c="gray.0" gutter={30} grow>
          <Grid.Col span={{ base: 12, md: 3, xs: 6 }}>
            <Title order={5} mb="1.2rem">
              Contact
            </Title>
            <Flex gap="0.7rem" direction="column">
              {contactData.map((item, index) => (
                <Flex gap="0.3rem" align="center" key={index}>
                  <item.icon color="#c6c6cf" size={20} />
                  <Text span fz="0.9rem" c="palePurple.2" fw={500}>
                    {item.text}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3, xs: 6 }}>
            <Title order={5} mb="1.2rem">
              Company
            </Title>
            <Flex gap="0.7rem" direction="column">
              {companyData.map((link, index) => (
                <UnStyledLink
                  className="footer-link"
                  to={link.route}
                  fz="0.9rem"
                  c="palePurple.2"
                  fw={500}
                  key={index}
                >
                  {link.text}
                </UnStyledLink>
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3, xs: 6 }}>
            <Title order={5} mb="1.2rem">
              Quick Links
            </Title>
            <Flex gap="0.7rem" direction="column">
              {quickLinksData.map((link, index) => (
                <UnStyledLink
                  className="footer-link"
                  to={link.route}
                  fz="0.9rem"
                  c="palePurple.2"
                  fw={500}
                  key={index}
                >
                  {link.text}
                </UnStyledLink>
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 3, xs: 6 }}>
            <Title order={5}>About Us</Title>
            <Text component="p" c="palePurple.2" my="1.2rem">
              We are the top real estate agency in Sydney, with agents available
              to answer any question 24/7.
            </Text>
            <Flex gap="0.5rem" align="center">
              {socialLinks.map((link, index) => (
                <Flex
                  justify="center"
                  align="center"
                  p={12}
                  key={index}
                  bg="palePurple.9"
                >
                  <link.icon color="#fff" size={20} />
                </Flex>
              ))}
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
      <Copyright />
    </Box>
  );
}
