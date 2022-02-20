import * as S from "./styles";

type CardProps = {
  title: string;
  subtitle?: string;
  thumbnail?: string;
  href?: string;
};

export const Card = (props: CardProps) => {
  const { title, subtitle, thumbnail, href } = props;

  return (
    <S.Card href={href} className="card">
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
