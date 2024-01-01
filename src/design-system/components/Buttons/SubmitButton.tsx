import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";
import style from "../style.module.scss";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _SubmitButton(props: any, ref: any) {
  return (
    <Button
      type="submit"
      fw={500}
      color="transparent"
      ref={ref}
      {...props}
      className={style.submit_button_wrapper}
    />
  );
}

export const SubmitButton = forwardRef(_SubmitButton) as FC<ButtonProps & any>;
