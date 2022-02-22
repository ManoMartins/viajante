import styled from "styled-components";

export const Header = styled.header<{
  headerGap: string;
  variant: "default" | "transparent";
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin-bottom: ${({ headerGap }) => headerGap};
  padding: 0 1rem;
`;
