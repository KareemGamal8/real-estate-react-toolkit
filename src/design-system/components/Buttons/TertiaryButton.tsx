import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";
import style from "../style.module.scss";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _TertiaryButton(props: any, ref: any) {
  return (
    <Button
      color="transparent"
      ref={ref}
      {...props}
      className={style.tertiary_button_wrapper}
    />
  );
}

export const TertiaryButton = forwardRef(_TertiaryButton) as FC<ButtonProps & any>;
