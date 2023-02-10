import styled, { css } from "styled-components";
import { ThemeProps } from "../styles/theme";

const Container = styled.div`
  ${({ theme }: {theme: ThemeProps}) => css`
    padding-top: 54px;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;

export default Container;
