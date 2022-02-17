import styled from "styled-components";

type SectionProps = {
  maxWidth?: string;
};

export const Container = styled.div<SectionProps>`
  max-width: ${(props) => props.maxWidth || "auto"};
  margin: 0 auto;
`;
