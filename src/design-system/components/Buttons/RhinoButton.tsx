import { Button, ButtonProps } from "@mantine/core";
import { FC, forwardRef } from "react";
import style from "../style.module.scss";

export type BaseButtonProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function _RhinoButton(props: any, ref: any) {
  return (
    <Button
      fw={700}
      color="transparent"
      ref={ref}
      {...props}
      className={style.rhino_button_wrapper}
    />
  );
}

export const RhinoButton = forwardRef(_RhinoButton) as FC<ButtonProps & any>;
