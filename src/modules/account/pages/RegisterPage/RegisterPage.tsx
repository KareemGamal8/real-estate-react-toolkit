import { Box, Flex, PasswordInput, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../../design-system/components/Buttons/SubmitButton";
import classes from "../style.module.css";

export default function RegisterPage() {
  const navigate = useNavigate()

  return (
    <Flex justify="center" align="center" mih="50vh">
      <Box m="auto" h="100%" w="40%" p="2rem" className={classes.form_wrapper}>
        <Flex justify="center" w="100%" gap="1rem" direction="column">
          <Title order={3} ta="center" c="palePurple.9">
            Register
          </Title>
          <form
            onSubmit={async (e: any) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const userData: any = {};

              formData.forEach((value, key) => {
                userData[key] = value;
              });

              try {
                const response = await fetch(
                  "https://real-estate-server-ctvu.onrender.com/users",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                  }
                );
                if (response.ok) {
                  console.log("Success");
                  navigate("/");
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
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
