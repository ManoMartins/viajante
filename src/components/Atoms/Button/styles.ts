import styled from "styled-components";

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
};

export const Container = styled.button<ButtonProps>`
  background-color: ${({ bgColor }) => bgColor};

  color: ${({ textColor }) => textColor};
  font-weight: 700;

  padding: 11px 32px;
  border-radius: 10px;

  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }
`;
