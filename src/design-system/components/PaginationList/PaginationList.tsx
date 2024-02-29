import { Flex, Pagination } from "@mantine/core";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import classes from "./style.module.css";

export default function PaginationList({ total }: { total: number }) {
  const navigate = useNavigate();

  const location = useLocation();

  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get("_page");

  return (
    <Flex justify="center" align="center" w="100%" pt="4rem">
      <Pagination
        siblings={10}
        m="auto"
        classNames={classes}
        fw={600}
        size="lg"
        gap={0}
        color="purple.2"
        value={Number(pageNumber) || 1}
        radius={0}
        total={total}
        onChange={(page) => {
          navigate({
            pathname: location.pathname,
            search: `?_page=${page}`,
          });
        }}
      />
    </Flex>
  );
}
