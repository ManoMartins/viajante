import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  font-family: Barlow, sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
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
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
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

export const CitiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
