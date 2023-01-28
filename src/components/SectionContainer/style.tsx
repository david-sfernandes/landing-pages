import styled, { css } from "styled-components";

const Container = styled.div`
  ${({theme}) => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.lg}
  `}
`

export default Container;