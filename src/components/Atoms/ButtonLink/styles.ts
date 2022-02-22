import styled, { css } from "styled-components";

type ButtonPropsProps = {
  textColor?: string;
  size: "md" | "lg";
  backgroundColor?: string;
};

export const Container = styled.a<ButtonPropsProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};

  font-weight: 700;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  text-decoration: none;
  white-space: nowrap;

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

      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 11px 32px;
      }
    `}
`;
