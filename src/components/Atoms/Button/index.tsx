import * as S from "./styles";
import { ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";

export enum ButtonSize {}

type ButtonProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
  size?: "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  const {
    label,
    bgColor = theme.colors.blue_low,
    textColor = theme.colors.blue,
    size = "md",
    ...rest
  } = props;

  return (
    <S.Container
      backgroundColor={bgColor}
      size={size}
      textColor={textColor}
      {...rest}
    >
      {label}
    </S.Container>
  );
};
