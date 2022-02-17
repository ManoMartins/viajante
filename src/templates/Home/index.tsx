import Image from "next/image";
import { useTheme } from "styled-components";
import { Button } from "../../components/Atoms/Button";
import { SectionLimiter } from "../../components/Utils/SectionLimiter";

import * as S from "./styles";

export const HomeTemplate = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <SectionLimiter>
        <S.Header>
          <Image
            src="/logo.svg"
            width="126px"
            height="26px"
            alt="Logo Traveler"
          />
          <Button label="Acesso restrito" onClick={() => alert("teste")} />
        </S.Header>
        <S.Main>
          <S.Article>
            <S.Title>
              Viva uma
              <br />
              grande <br />
              aventura
            </S.Title>
            <S.Text>
              Descubra locais incríveis para se
              <br />
              visitar em cidades maravilhosas de <br /> Santa Catarina.
            </S.Text>
            <Button
              label="Descobrir todos os lugares"
              size="lg"
              bgColor={theme.colors.orange}
              textColor={theme.colors.shape}
            />
          </S.Article>
          <S.Aside>
            <S.AsideLeftColumn>
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
            </S.AsideLeftColumn>

            <S.AsideRightColumn>
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
              <S.Square />
            </S.AsideRightColumn>
          </S.Aside>
        </S.Main>
      </SectionLimiter>
    </S.Container>
  );
};
