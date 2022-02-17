import NextImage from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ThumbnailWrapper = styled.figure`
  height: 175px;

  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  border-radius: 5px 5px 0 0;
`;

export const Thumbnail = styled(NextImage)`
  position: absolute;
  object-fit: cover;

  background: #121214;
  background-image: linear-gradient(
    to right,
    #121214 0%,
    #171719 20%,
    #121214 40%,
    #121214 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  transition: all 0.3s ease-in-out;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Infos = styled.div`
  background: ${({ theme }) => theme.colors.shape};
  border: 1px solid ${({ theme }) => theme.colors.shape_dark};
  border-radius: 0 0 5px 5px;
  padding: 25px 25px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
`;

export const Subtitle = styled.sub`
  font-size: 1rem;
`;