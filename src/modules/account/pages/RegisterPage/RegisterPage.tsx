import { Box, Flex, PasswordInput, TextInput, Title } from "@mantine/core";
import { SubmitButton } from "../../../../design-system/components/Buttons/SubmitButton";
import useAuth from "../../hooks";
import classes from "../style.module.css";

export default function RegisterPage() {
  const { registerSubmit } = useAuth();

  return (
    <Flex justify="center" align="center" mih="50vh">
      <Box m="auto" h="100%" w="40%" p="2rem" className={classes.form_wrapper}>
        <Flex justify="center" w="100%" gap="1rem" direction="column">
          <Title order={3} ta="center" c="palePurple.9">
            Register
          </Title>
          <form onSubmit={registerSubmit}>
            <TextInput
              my="1rem"
              classNames={classes}
              label="Name"
              variant="filled"
              name="name"
              required
              placeholder="Enter your Name"
              w="100%"
            />
            <TextInput
              my="1rem"
              classNames={classes}
              label="Email"
              variant="filled"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              w="100%"
            />
            <PasswordInput
              my="1rem"
              classNames={classes}
              label="Password"
              variant="filled"
              name="password"
              required
              placeholder="Enter your Password"
              w="100%"
            />
            <SubmitButton w="100%">Submit</SubmitButton>
          </form>
        </Flex>
      </Box>
    </Flex>
  );
}
