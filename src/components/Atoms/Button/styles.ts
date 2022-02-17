import styled, { css } from "styled-components";

type ButtonProps = {
  textColor?: string;
  size: "md" | "lg";
  backgroundColor?: string;
};

export const Container = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};

  font-weight: 700;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }

  ${({ size }) =>
    size === "md" &&
    css`
      padding: 11px 32px;
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === "lg" &&
    css`
      padding: 23px 56px;
      font-size: 1.125rem;
    `}
`;
