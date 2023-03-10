import styled, { css } from "styled-components";
import { ThemeProps } from "../../styles/theme";
import * as Heading from "../Heading/style";
import * as TextComponent from "../TextComponent/style";

const Container = styled.div`
  ${({ theme }: {theme: ThemeProps}) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings['2xl']};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }: {theme: ThemeProps}) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.lg};
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${Heading} {
    position: relative;
    left: 5rem;
  }
  ${Heading}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg);
  }
`;

export default Container;
