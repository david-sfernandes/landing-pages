import styled, { css, keyframes } from "styled-components";
import { ThemeProps } from "../../styles/theme";

export const Container = styled.div`
  ${({theme}: {theme: ThemeProps}) => css`
    position: absolute;
    inset: 0;
    z-index: 10;
    background-color: ${theme.colors.primary};

    &:before, &:after {
      constent: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 5px solid transparent;
      border-radius: 50%;

      &:after {
        width: 60px;
        height: 60px;
        border-left: 5px solid ${theme.colors.secundary};
        border-top: 5px solid ${theme.colors.secundary};
        animation: ${rotate()} 1s ease-in-out infinite;
      }

      &:before {
        width: 20px;
        height: 20px;
        border-left: 5px solid ${theme.colors.secundary};
        border-top: 5px solid ${theme.colors.secundary};
        animation: ${rotate()} 1s ease-in-out reverse infinite;
      }
    }
  `}
`

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(30deg);
  }
`