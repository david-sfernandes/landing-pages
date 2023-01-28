import styled, { css } from "styled-components";

const Container = styled.nav`
  ${({theme}) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.media.ltdMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`

export default Container;