import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _SubmitButton(props: any, ref: any) {
  return (
    <Button
      type="submit"
      variant="light"
      fw={500}
      color="purple.3"
      ref={ref}
      {...props}
    />
  );
}

export const SubmitButton = forwardRef(_SubmitButton) as FC<ButtonProps & any>;
