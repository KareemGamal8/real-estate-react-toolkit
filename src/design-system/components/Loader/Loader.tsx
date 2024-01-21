import { LoadingOverlay } from "@mantine/core";

export default function Loader() {
  return (
    <LoadingOverlay
      visible
      zIndex={1000}
      color="purple.3"
      loaderProps={{ color: "purple", type: "bars" }}
    />
  );
}
