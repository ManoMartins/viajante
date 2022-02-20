import Image from "next/image";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Button } from "../../components/Atoms/Button";
import { SectionLimiter } from "../../components/Utils/SectionLimiter";
import { Card } from "../../components/Organisms/Card";

import * as S from "./styles";
import { ButtonLink } from "../../components/Atoms/ButtonLink";

type HomeTemplateProps = {
  cities: any;
};

export const HomeTemplate = ({ cities }: HomeTemplateProps) => {
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
          <ButtonLink
            label="Acesso restrito"
            href="/login"
            onClick={() => alert("teste")}
          />
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
            <ButtonLink
              label="Descobrir todos os lugares"
              size="lg"
              href="/cities"
              bgColor={theme.colors.orange}
              textColor={theme.colors.shape}
            />
          </S.Article>
          <S.Aside data-aos="fade-left" data-aos-duration="500">
            <S.AsideGrid>
              {cities.map((city) => (
                <Card
                  title={city.name}
                  subtitle={`${city.places_count} lugares`}
                  thumbnail={city.thumbnail}
                  key={city.id}
                  href={`/cities/${city.slug}`}
                />
              ))}
            </S.AsideGrid>
          </S.Aside>
        </S.Main>
      </SectionLimiter>
    </S.Container>
  );
};
