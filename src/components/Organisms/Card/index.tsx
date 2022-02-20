import * as S from "./styles";

type CardProps = {
  title: string;
  subtitle?: string;
  thumbnail?: string;
};

export const Card = (props: CardProps) => {
  const { title, subtitle, thumbnail } = props;

  return (
    <S.Card className="card">
      <S.ThumbnailWrapper>
        <S.Thumbnail src={thumbnail} alt={`${title} thumbnail`} layout="fill" />
      </S.ThumbnailWrapper>
      <S.Infos>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.Infos>
    </S.Card>
  );
};
