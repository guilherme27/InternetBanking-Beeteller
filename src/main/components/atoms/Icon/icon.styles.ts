import { styled } from 'styled-components';

import { IconSize } from './icon.atom';

export const Icon = styled.i<{ size: IconSize }>`
  ${({ size, theme }) => `font-size: ${theme.fonts.size[size]}`};
  ${({ color, theme }) => color === 'base' && `color: ${theme.colors.primary.base}`}
  ${({ color, theme }) => color === 'accent' && `color: ${theme.colors.primary.accent}`}
  ${({ color, theme }) => color === 'white' && `color: ${theme.colors.primary.white}`}
  ${({ color, theme }) => color === 'black' && `color: ${theme.colors.neutral.black}`}
  ${({ color, theme }) => color === 'dark' && `color: ${theme.colors.neutral.dark}`}
  ${({ color, theme }) => color === 'success' && `color: ${theme.colors.status.success}`}
  ${({ color, theme }) => color === 'danger' && `color: ${theme.colors.status.danger}`}
`;
