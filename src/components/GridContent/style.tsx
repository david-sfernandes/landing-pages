import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: center;
  max-width: 58rem;
  margin: 0 auto;
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings["2xl"]} 0;
  `}
`;

export default Container;
