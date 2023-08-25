import React from 'react';

import { GridSizes } from '@/common/@types/grid-sizes';

import * as S from './grid-item.styles';

type Props = {
  container?: boolean;
  centered?: boolean;
  item?: boolean;
  gap?: string;
  xs?: GridSizes;
  sm?: GridSizes;
  md?: GridSizes;
  lg?: GridSizes;
} & React.HTMLAttributes<HTMLDivElement>;

const Grid = ({ children, item = false, container, centered, gap, ...props }: Props) => {
  return (
    <S.GridItem className='ignoreLoading' gap={gap} $item={item} $container={container} $centered={centered} {...props}>
      {children}
    </S.GridItem>
  );
};

export default Grid;
