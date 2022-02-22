import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const Article = styled.article`
  margin-top: 8.5rem;
  position: sticky;
  height: 472px;
  top: 8.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: initial;
    margin-top: 4rem;
    margin-bottom: 4rem;
    height: auto;
  }
`;

export const Title = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 48px;
  line-height: 74px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 48px;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 1rem;
  width: 640px;
  position: relative;
  padding-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const AsideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1rem;

  a.card:nth-child(even) {
    transform: translateY(4rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);

    a.card:nth-child(even) {
      transform: translateY(0);
    }
  }
`;
