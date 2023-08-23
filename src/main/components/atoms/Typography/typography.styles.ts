import { styled } from 'styled-components';

import { TypographyProps } from './typography.atom';

export const Typography = styled.span<TypographyProps>`
  font-size: ${(props) => sizes[props.size]};
  color: font-size: ${(props) => sizes[props.color]};
`;
