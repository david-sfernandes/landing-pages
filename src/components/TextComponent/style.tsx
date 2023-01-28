import styled, { css } from "styled-components";

const Container = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.md};
  `}
`

export default Container;