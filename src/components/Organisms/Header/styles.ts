import styled, { css } from "styled-components";

export const Header = styled.header<{
  headerGap: string;
  variant: "default" | "transparent";
}>`
  width: 100%;
  height: 5rem;

  margin-bottom: ${({ headerGap }) => headerGap};

  ${({ variant, theme }) =>
    variant === "default" &&
    css`
      background-color: ${({ theme }) => theme.colors.shape};
      margin: 0 auto;
      border: 1px solid ${({ theme }) => theme.colors.shape_dark};
    `}
`;

export const Content = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
`;
