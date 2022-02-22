import { useTheme } from "styled-components";
import { SectionLimiter } from "../../components/Utils/SectionLimiter";
import { Card } from "../../components/Organisms/Card";

import * as S from "./styles";
import { ButtonLink } from "../../components/Atoms/ButtonLink";
import { LayoutDefault } from "../../components/Layouts/Default";

type HomeTemplateProps = {
  cities: any;
};

export const HomeTemplate = ({ cities }: HomeTemplateProps) => {
  const theme = useTheme();

  return (
    <LayoutDefault
      headerProps={{
        headerGap: "1rem",
        variant: "transparent",
      }}
    >
      <S.Main>
        <S.Article>
          <S.Title data-aos="fade-right" data-aos-duration="500">
            Viva uma
            <br />
            grande <br />
            aventura
          </S.Title>
          <S.Text data-aos="fade-right" data-aos-duration="600">
            Descubra locais incríveis para se
            <br />
            visitar em cidades maravilhosas de <br /> Santa Catarina.
          </S.Text>
          <div data-aos="fade-right" data-aos-duration="1000">
            <ButtonLink
              label="Descobrir todos os lugares"
              size="lg"
              href="/cities"
              bgColor={theme.colors.orange}
              textColor={theme.colors.shape}
            />
          </div>
        </S.Article>
        <S.Aside>
          <S.AsideGrid data-aos="fade-up" data-aos-duration="500">
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
    </LayoutDefault>
  );
};
