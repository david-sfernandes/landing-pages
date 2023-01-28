type HeadingProps = {
  children: string;
  darkColor?: boolean;
  size?: "lg" | "md" | "sm" | "xl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  uppercase?: boolean;
};

type MenuLinkProps = {
  children: string;
  link: string;
  newTab?: boolean;
};

type LogoLinkProps = {
  srcImg?: string;
  text: string;
  link: string;
};

type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcImg: string;
  background?: boolean;
};

type GridContentProps = { title: string; html: string; background: boolean };

type GridTextProps = {
  title: string;
  description: string;
  grid: GridTextElProps[];
  background: boolean;
}

type GridTextElProps = {
  title: string;
  description: string;
}
type GridImageProps  = {
  title: string;
  description: string;
  grid: GridImageElProps[];
  background: boolean;
}

type GridImageElProps = {
  srcImg: string;
  altText: string;
}