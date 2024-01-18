import { Pagination } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaginationList({ total }: { total: number }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Pagination
      size="md"
      py="2rem"
      color="purple.3"
      m="auto"
      radius="lg"
      total={total}
      onChange={(page) => {
        navigate({
          pathname: location.pathname,
          search: `?_page=${page}`,
        });
      }}
    />
  );
}
