import styled, { css } from "styled-components";
import * as Heading from "../Heading/style";

const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.lg};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Heading} {
      margin-bottom: ${theme.spacings.xl};
    }
  `}
`

export const TextContainer = styled.div`
   ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.lg};
    }
  `}
`

export const ImageContainer = styled.div``

export const Image = styled.img`
  width: 100%;
`

export default Container;