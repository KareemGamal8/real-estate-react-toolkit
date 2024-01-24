import { Flex, Text, Title } from "@mantine/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import classes from "../style.module.css";

export default function PropertyDescriptionSection() {
  const { property } = useSelector((state: RootState) => state.properties);

  useEffect(() => {
    // Fetch wishlist data when the component mounts
    fetch(
      "https://real-estate-server-ctvu.onrender.com/wishlist"
    )
      .then((response) => console.log(response.json()))
      .catch((error) => console.error("Error fetching wishlist:", error));
  }, []); // Empty dependency array ensures that this effect runs only once

  return (
    <Flex
      bg="gray.0"
      gap="0.5rem"
      direction="column"
      className={classes.section_wrapper}
    >
      <Title order={4}>Description</Title>
      <Text component="p" c="gray.6">
        {property.description}
      </Text>
    </Flex>
  );
}
