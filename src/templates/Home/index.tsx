import Image from "next/image";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Atoms/Button";
import { SectionLimiter } from "../../components/Utils/SectionLimiter";
import { Card } from "../../components/Organisms/Card";

import * as S from "./styles";

export const HomeTemplate = () => {
  const theme = useTheme();

  const cards1 = useMemo(
    () => [
      {
        title: "Florianópolis",
        subtitle: "98 locais",
      },
      {
        title: "Florianópolis",
        subtitle: "98 locais",
      },
      {
        title: "Florianópolis",
        subtitle: "98 locais",
      },
      {
        title: "Florianópolis",
        subtitle: "98 locais",
      },
    ],
    []
  );

  const cards2 = useMemo(
    () => [
      {
        title: "Florianópolis",
        subtitle: "98 locais",
      },
      {
        title: "Blumenau",
        subtitle: "98 locais",
      },
      {
        title: "Bombinhas",
        subtitle: "98 locais",
      },
      {
        title: "Águas Mornas",
        subtitle: "98 locais",
      },
    ],
    []
  );

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
              {cards1.map((card, index) => (
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  key={JSON.stringify(card)}
                  thumbnail={`https://picsum.photos/100${index}/100${index}`}
                />
              ))}
            </S.AsideLeftColumn>

            <S.AsideRightColumn>
              {cards2.map((card, index) => (
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  key={JSON.stringify(card)}
                  thumbnail={`https://picsum.photos/101${index}/101${index}`}
                />
              ))}
            </S.AsideRightColumn>
          </S.Aside>
        </S.Main>
      </SectionLimiter>
    </S.Container>
  );
};
