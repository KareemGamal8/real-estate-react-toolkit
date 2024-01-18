import { Flex, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchQuery } from "../../../../slices/propertiesSlice";
import style from "../style.module.css";

export default function SearchPropertiesForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchQuery } = useSelector((state: any) => state.properties);
  const location = useLocation();

  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      p="0 0.5rem"
      my="1rem"
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
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("q", e.target.value);
            navigate(`${location.pathname}?${searchParams.toString()}`);
          }, 1000);
        }}
      />
      <Flex justify="center" align="center">
        <IconSearch size={22} color="#6575fe" />
      </Flex>
    </Flex>
  );
}
