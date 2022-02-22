import { useMemo, useState } from "react";
import { LayoutDefault } from "../../components/Layouts/Default";
import { Card } from "../../components/Organisms/Card";
import * as S from "./styles";

type CitiesTemplateProps = {
  cities: any;
};

export const CitiesTemplate = ({ cities }: CitiesTemplateProps) => {
  const [options, setOptions] = useState(
    useMemo(
      () => [
        {
          label: "Todas",
        },
        {
          label: "Mais acessadas",
        },
        {
          label: "A - Z",
        },
      ],
      []
    )
  );
  const [activeOption, setActiveOption] = useState(options[0]);
  console.log(cities);

  return (
    <LayoutDefault headerProps={{ hasSearch: true }}>
      <S.Container>
        <S.Header>
          <S.Title>Selecione uma cidade</S.Title>
          <S.Options>
            {options.map((option) => (
              <S.Option
                key={option.label}
                onClick={() => setActiveOption(option)}
                active={activeOption === option}
              >
                {option.label}
              </S.Option>
            ))}
          </S.Options>
        </S.Header>
        <S.CitiesList>
          {cities?.map((city) => (
            <Card
              title={city.name}
              subtitle={`${city.places_count} lugares`}
              thumbnail={city.thumbnail}
              key={city.id}
              href={`/cities/${city.slug}`}
            />
          ))}
        </S.CitiesList>
      </S.Container>
    </LayoutDefault>
  );
};
