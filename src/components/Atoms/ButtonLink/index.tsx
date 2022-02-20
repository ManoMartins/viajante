import * as S from "./styles";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { useTheme } from "styled-components";

export enum ButtonSize {}

type ButtonPropsProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
  size?: "md" | "lg";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonLink = (props: ButtonPropsProps) => {
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
