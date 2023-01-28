import styled, { css } from 'styled-components';
import * as TextComponent from '../TextComponent/style';

const Container = styled.div`
  ${({ theme }) => css`
    > ${TextComponent} {
      margin-bottom: ${theme.spacings['2xl']};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.lg};
  `}
`;

export const GridElement = styled.div`
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
`

export default Container;