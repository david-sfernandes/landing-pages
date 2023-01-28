import styled, { css } from "styled-components";

const Container = styled.a`
  ${({theme}) => css`
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;

    > img {
      max-height: 25px;
    }
  `}
`

export default Container;