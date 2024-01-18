import { Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../../../slices/propertiesSlice";
import style from "../style.module.css";

export default function SearchPropertiesForm() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state: any) => state.properties);

  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      p="0 0.5rem"
      className={style.search_form_wrapper}
    >
      <TextInput
        variant="unstyled"
        name="q"
        px="0.3rem"
        width="70%"
        defaultValue={searchQuery}
        required
        placeholder="Search"
        w="100%"
        onChange={(e) => {
          setTimeout(() => {
            dispatch(setSearchQuery(e.target.value));
          }, 1000);
        }}
      />
      <Flex justify="center" align="center">
        <IconSearch size={22} color="#6575fe" />
      </Flex>
    </Flex>
  );
}
