import styled, { css } from "styled-components";
import { ThemeProps } from "../../styles/theme";

const Container = styled.div`
  ${({theme}: {theme: ThemeProps}) => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.lg};

    @media (${theme.media.lteMedium}) {
      padding: ${theme.spacings['3xl']} ${theme.spacings.lg};
    }
  `}
`

export default Container;