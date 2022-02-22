import { useRouter } from "next/router";
import { Header, HeaderProps } from "../../Organisms/Header";
import { SectionLimiter } from "../../Utils/SectionLimiter";

type LayoutDefaultProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  headerProps?: HeaderProps;
};

export const LayoutDefault = (props: LayoutDefaultProps) => {
  const { children, headerProps } = props;
  const { headerGap } = headerProps || {};

  const { asPath } = useRouter();

  return (
    <SectionLimiter>
      <Header
        headerGap={headerGap}
        variant={asPath === "/" ? "transparent" : "default"}
      />
      {children}
    </SectionLimiter>
  );
};
