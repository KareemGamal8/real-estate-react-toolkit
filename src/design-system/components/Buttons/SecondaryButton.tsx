import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _SecondaryButton(props: any, ref: any) {
  return <Button variant="white" bg="gray.6" ref={ref} {...props} c="gray.0" />;
}

export const SecondaryButton = forwardRef(_SecondaryButton) as FC<
  ButtonProps & any
>;
