import { useTheme } from "styled-components";
import * as S from "./styles";

type SectionLimiterProps = {
  maxWidth?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const SectionLimiter = (props: SectionLimiterProps) => {
  const theme = useTheme();
  const { maxWidth = "1180px", children, ...rest } = props;

  return (
    <S.Container maxWidth={maxWidth} {...rest}>
      {children}
    </S.Container>
  );
};
