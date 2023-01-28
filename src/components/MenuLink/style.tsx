import styled, { css } from "styled-components";

const Container = styled.a`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.sm};
    display: block;
    text-decoration: none;
    padding: ${theme.spacings.sm};
    color: ${theme.colors.primary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 7px;
      left: 25%;
      width: 0;
      height: 3px;
      background: ${theme.colors.secundary};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`

export default Container;