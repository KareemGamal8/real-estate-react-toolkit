import { Pagination } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function PaginationList({ total }: { total: number }) {
  const navigate = useNavigate();

  return (
    <Pagination
      size="sm"
      radius="xl"
      total={total}
      onChange={(page) => {
        navigate({
          pathname: "/properties",
          search: `?_page=${page}&_limit=6`,
        });
      }}
    />
  );
}
