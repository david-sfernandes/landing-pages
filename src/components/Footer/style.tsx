import styled, { css } from "styled-components";
import * as TextComponent from "../TextComponent/style";
import * as SectionContainer from "../SectionContainer/style";
import { ThemeProps } from "../../styles/theme";

const Container = styled.footer`
  ${({ theme }: { theme: ThemeProps}) => css`
    text-align: center;
    border-top: 1px solid ${theme.colors.gray};
    
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.font.sizes.sm};
    }

    & ${SectionContainer} {
      padding-block: 0;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.sm};
    }
  `}
`

export default Container;