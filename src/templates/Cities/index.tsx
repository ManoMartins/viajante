import { useMemo, useState } from "react";
import { LayoutDefault } from "../../components/Layouts/Default";
import * as S from "./styles";

export const CitiesTemplate = () => {
  const [activeOption, setActiveOption] = useState("");

  const options = useMemo(
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
  );

  return (
    <LayoutDefault headerProps={{ hasSearch: true }}>
      <S.Container>
        <S.Header>
          <S.Title>Selecione uma cidade</S.Title>
          <S.Options>
            {options.map((option) => (
              <S.Option
                key={option.label}
                onClick={() => setActiveOption(option.label)}
                active={activeOption === option.label}
              >
                {option.label}
              </S.Option>
            ))}
          </S.Options>
        </S.Header>
        <h1>cidades porra kkkk </h1>
      </S.Container>
    </LayoutDefault>
  );
};
