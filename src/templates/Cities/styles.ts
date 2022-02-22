import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  font-family: Barlow, sans-serif;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.shape_dark};
  height: 48px;
`;

export const Option = styled.div<{ active?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  height: 100%;
  display: flex;
  align-items: center;

  transition: all 0.1s ease-in-out;

  & + & {
    margin-left: 32px;
  }

  &:hover {
    border-bottom: 2px solid
      ${({ theme, active }) =>
        active ? theme.colors.orange : theme.colors.shape_dark};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.title};
      font-weight: 700;
      border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
    `}
`;
