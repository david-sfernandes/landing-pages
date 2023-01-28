import styled, { css } from "styled-components";

interface ContainerInterface {
  darkColor: boolean; ///Passing Optional Props
  size: string;
  uppercase: boolean;
}

const titleSize: any = {
  sm: (theme: any) => theme.font.sizes.md,
  md: (theme: any) => theme.font.sizes.lg,
  lg: (theme: any) => theme.font.sizes.xl,
  xl: (theme: any) => theme.font.sizes["3xl"],
};

const mediaFont = (theme: any) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.lg};
  }
`;

const Container = styled.h1<ContainerInterface>`
  ${({ theme, darkColor, size, uppercase }) => css`
    color: ${darkColor ? theme.colors.primary : theme.colors.white};
    font-size: ${titleSize[size](theme)};
    ${size === "xl" ? mediaFont(theme) : ""}
    text-transform: ${uppercase ? "uppercase" : "none"};
  `}
`;

export default Container;
