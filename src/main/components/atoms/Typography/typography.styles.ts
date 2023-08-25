import { styled } from 'styled-components';

import { TypographyProps } from './typography.atom';

export const Typography = styled.p<TypographyProps & { $bold: boolean }>`
  white-space: nowrap;
  margin: 0;
  padding: 0;
  font-weight: ${({ $bold }) => ($bold ? '600' : '')};
  ${({ size, theme }) => `font-size: ${theme.fonts.size[size || 'md']}`};
  ${({ color, theme }) => color === 'base' && `color: ${theme.colors.primary.base}`}
  ${({ color, theme }) => color === 'white' && `color: ${theme.colors.primary.white}`}
  ${({ color, theme }) => color === 'neutralBase' && `color: ${theme.colors.neutral.base}`}
  ${({ color, theme }) => color === 'dark' && `color: ${theme.colors.neutral.dark}`}
  ${({ color, theme }) => color === 'light' && `color: ${theme.colors.neutral.light}`}
  ${({ color, theme }) => color === 'success' && `color: ${theme.colors.status.success}`}
  ${({ color, theme }) => color === 'danger' && `color: ${theme.colors.status.danger}`}
`;
