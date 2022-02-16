import * as S from "./styles";
import { ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";

type ButtonProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const theme = useTheme();
  const {
    label,
    bgColor = theme.colors.blue_low,
    textColor = theme.colors.blue,
    ...rest
  } = props;

  return (
    <S.Container {...rest} bgColor={bgColor} textColor={textColor}>
      {label}
    </S.Container>
  );
};
