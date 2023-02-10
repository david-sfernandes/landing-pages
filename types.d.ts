type HeadingProps = {
  children: string;
  darkColor?: boolean;
  size?: "lg" | "md" | "sm" | "xl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  uppercase?: boolean;
};

type NavLinksProps = {
  links?: MenuLinkProps[];
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
  text?: string;
  srcImg?: string;
  background?: boolean;
};

type GridContentProps = {
  title: string;
  html?: string;
  background?: boolean;
};

type GridTextProps = {
  title: string;
  description?: string;
  grid?: GridTextElProps[];
  background: boolean;
};

type GridTextElProps = {
  title: string;
  description: string;
};
type GridImageProps = {
  title: string;
  description?: string;
  grid?: GridImageElProps[];
  background: boolean;
};

type GridImageElProps = {
  srcImg: string;
  altText: string;
};

type BaseProps = MenuProps & {
  footerHtml: string;
  children: ReactNode;
};

type FooterProps = {
  html: string;
};

// type Data = {
//   footer_text: string;
//   slug: string;
//   title: string;
//   sections: Section[];
//   menu: Menu;
//   _id: string;
//   published_at: string;
//   footer_text: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
//   id: string;
// };

interface Data {
  footer_text: string
  slug: string
  title: string
  sections: Section[]
  menu: Menu
};

// type Section = {
//   __component: string;
//   text_grid: any[];
//   image_grid: any[];
//   title: string;
//   description: string;
//   background: boolean;
//   content: string;
//   image: {
//     url: string;
//   };
//   metadata: {
//     background: boolean;
//     section_id: string;
//   };
// };

interface Section {
  __component: string
  text_grid?: any[]
  image_grid?: any[]
  title: string
  description?: string
  background?: boolean
  content?: string
  image?: {
    url: string
  }
  metadata: {
    background: boolean
    section_id: string
  }
};

// type Menu = {
//   open_in_new_tab: boolean;
//   logo_text: string;
//   logo_link: string;
//   menu: Link[];
//   logo: {
//     url: string;
//   };
// };

interface Menu {
  open_in_new_tab: boolean
  logo_text: string
  logo_link: string
  menu: Link[]
  logo: {
    url: string
  }
};

type Link = {
  open_in_new_tab: boolean;
  link_text: string;
  url: string;
};

type MappedData = {
  footerHtml: string;
  slug: string;
  title: string;
  sections: MappedSection[];
  menu: MappedMenu;
};

type MappedSection = {
  component: string;
  title: string;
  text?: string;
  srcImg?: string;
  background: boolean;
  sectionId: string;
  html?: string;
  description?: string;
  grid?: (GridTextElProps & GridImageElProps)[];
};

type Grid = {
  title: string;
  description: string;
  srcImg: string;
  altText: string;
};

type MappedMenu = {
  newTab: boolean;
  text: string;
  link: string;
  links: MappedLink[];
  srcImg: string;
};

type MappedLink = {
  newTab: boolean;
  children: string;
  link: string;
};
