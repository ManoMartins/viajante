import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../../Atoms/ButtonLink";

export type HeaderProps = {
  headerGap?: string;
  variant?: "default" | "transparent";
};

export const Header = (props: HeaderProps) => {
  const { headerGap = "40px", variant = "default" } = props;

  return (
    <S.Header headerGap={headerGap} variant={variant}>
      <Link href="/">
        <a data-aos="fade-right" data-aos-duration="500">
          <Image
            src="/logo.svg"
            width="126px"
            height="26px"
            alt="Logo Traveler"
          />
        </a>
      </Link>
      <ButtonLink
        label="Acesso restrito"
        href="/login"
        onClick={() => alert("teste")}
      />
    </S.Header>
  );
};
