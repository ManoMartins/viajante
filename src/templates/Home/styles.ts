import styled from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.shape};
  padding: 0 1rem 4rem 1rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
`;

export const Article = styled.article`
  margin-top: 8.5rem;
  position: sticky;
  height: 472px;
  top: 8.5rem;
`;

export const Title = styled.h2`
  font-size: 80px;
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
`;

export const AsideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1rem;

  div.card:nth-child(even) {
    transform: translateY(4rem);
  }
`;

export const AsideLeftColumn = styled.div`
  display: grid;
  width: 50%;

  div + div {
    margin-top: -4rem;
  }
`;

export const AsideRightColumn = styled.div`
  display: grid;
  width: 50%;

  gap: 1rem;
  margin-top: 76px;
`;

export const Square = styled.div`
  width: 100%;
  height: 316px;
  background: ${({ theme }) => theme.colors.shape_dark};
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.blue_low};
  }
`;
