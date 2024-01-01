import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _PrimaryButton(props: any, ref: any) {
  return <Button fw={500} c="purple.3" ref={ref} variant="white" {...props} />;
}

export const PrimaryButton = forwardRef(_PrimaryButton) as FC<BaseButtonProps>;
