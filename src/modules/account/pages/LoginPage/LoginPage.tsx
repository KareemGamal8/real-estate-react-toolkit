import { Box, Flex, PasswordInput, TextInput, Title } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "../../../../design-system/components/Buttons/SubmitButton";
import { setUser } from "../../../../slices/userSlice";
import classes from "../style.module.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Flex justify="center" align="center" mih="50vh">
      <Box m="auto" h="100%" w="40%" p="2rem" className={classes.form_wrapper}>
        <Flex justify="center" w="100%" gap="1rem" direction="column">
          <Title order={3} ta="center" c="palePurple.9">
            Login
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
                  "https://real-estate-server-ctvu.onrender.com/login",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                  }
                );
                if (response.ok) {
                  const data = await response.json();
                  localStorage.setItem("accessToken", data.accessToken);
                  dispatch(setUser(data.user));
                  navigate("/");
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <TextInput
              my="1rem"
              type="email"
              classNames={classes}
              label="Email"
              variant="filled"
              name="email"
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
