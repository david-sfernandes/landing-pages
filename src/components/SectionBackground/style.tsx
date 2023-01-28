import styled, { css } from "styled-components";

const activeBackground = (theme: any) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
`;

interface SectionBackgroundInterface {
  background: boolean;
}

const Container = styled.div<SectionBackgroundInterface>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    ${background && activeBackground(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

export default Container;
