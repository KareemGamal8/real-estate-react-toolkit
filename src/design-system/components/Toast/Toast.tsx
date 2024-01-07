import { rem } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconLoader, IconX } from "@tabler/icons-react";

export function toastSuccess(text: string) {
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return notifications.show({
    id: Math.floor(Math.random() * 100) + "k",
    withCloseButton: true,
    autoClose: 2500,
    title: text,
    message: "success",
    color: "teal",
    icon: checkIcon,
    className: "my-notification-class",
    style: { backgroundColor: "gray.0", margin: "0.5rem 0" },
    loading: false,
    w: "24rem",
  
  });
}

export function toastError(error: string) {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  return notifications.show({
    id: Math.floor(Math.random() * 100) + "k",
    withCloseButton: true,
    autoClose: 2500,
    title: error,
    message: "error",
    color: "red",
    icon: xIcon,
    className: "my-notification-class",
    style: { backgroundColor: "gray.0", margin: "0.5rem 0" },
    loading: false,
    w: "24rem",
    right:0
  });
}

export function toastLoading(text: string) {
  const loaderIcon = <IconLoader style={{ width: rem(20), height: rem(20) }} />;
  return notifications.show({
    id: Math.floor(Math.random() * 100) + "k",
    withCloseButton: true,
    autoClose: 2500,
    title: text,
    message: "loading",
    color: "red",
    icon: loaderIcon,
    className: "my-notification-class",
    style: { backgroundColor: "gray.0", margin: "0.5rem 0" },
    loading: false,
    w: "24rem",
  });
}
