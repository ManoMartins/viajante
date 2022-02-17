import styled from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.shape};
  padding: 0 1rem;
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
  align-items: center;
  height: calc(100vh - 5rem);
  max-height: 1080px;
`;

export const Article = styled.article``;

export const Title = styled.h2`
  font-size: 80px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 48px;
`;

export const Aside = styled.aside``;
