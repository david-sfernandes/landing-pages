import styled, { css } from "styled-components";
import { ThemeProps } from "../../styles/theme";

const Container = styled.nav`
  ${({theme}: {theme: ThemeProps}) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`

export default Container;