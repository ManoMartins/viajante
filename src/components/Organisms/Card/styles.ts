import NextImage from "next/image";
import styled from "styled-components";

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
  color: #617480;
`;

export const ThumbnailWrapper = styled.figure`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  border-radius: 5px 5px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 160px;
  }
`;

export const Thumbnail = styled(NextImage)`
  position: absolute;
  object-fit: cover;

  background: #a9b0b8;
  background-image: linear-gradient(
    to right,
    #a9b0b8 0%,
    #b5bfc9 20%,
    #a9b0b8 40%,
    #a9b0b8 100%
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
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 12ch;
  }
  "
  " @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 15ch;
  }
`;

export const Subtitle = styled.sub`
  font-size: 1rem;
`;
