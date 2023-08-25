import { css, styled } from 'styled-components';

import { GridSizes } from '@/common/@types/grid-sizes';

type GridProps = {
  xs?: GridSizes;
  sm?: GridSizes;
  md?: GridSizes;
  lg?: GridSizes;
  $item?: boolean;
  $container?: boolean;
  $centered?: boolean;
  gap?: string;
};

export const GridItem = styled.div<GridProps>`
  ${({ $item, gap, xs, sm, md, lg }) =>
    !$item
      ? css`
          display: grid;
          grid-template-columns: repeat(12, 1fr); /* Defina o número de colunas aqui */

          gap: ${gap || '16px'};
          grid-column: span 12; /* Ocupa todas as 12 colunas em itens */
        `
      : css`
          grid-column: span ${xs || 12}; /* Define a largura da coluna para xs */

          @media (min-width: 576px) {
            grid-column: span ${sm || xs || 12}; /* Define a largura da coluna para sm */
          }

          @media (min-width: 920px) {
            grid-column: span ${md || sm || xs || 12}; /* Define a largura da coluna para md */
          }

          @media (min-width: 992px) {
            grid-column: span ${lg || md || sm || xs || 12}; /* Define a largura da coluna para lg */
          }
        `}

  ${({ $container }) =>
    $container
      ? css`
          max-width: 1240px;
          margin: 0 auto;
          padding: 16px;
        `
      : 'width: 100%;'}

  ${({ $centered }) =>
    $centered &&
    css`
      justify-content: center;
      align-self: center;
      margin: 0 auto;
    `}
`;
