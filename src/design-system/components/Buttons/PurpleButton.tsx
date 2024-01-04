import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _PurpleButton(props: any, ref: any) {
  return <Button fw={700} color="purple.2" ref={ref} {...props} />;
}

export const PurpleButton = forwardRef(_PurpleButton) as FC<ButtonProps & any>;
