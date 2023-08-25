import styled, { css } from 'styled-components';

export const Button = styled.button<{ $isExpandable: boolean; $expand: boolean }>`
  display: flex;
  padding-inline: 1rem;
  border: none;
  gap: 1rem;
  height: 3rem;
  min-width: 4.938rem;
  align-items: center;
  white-space: nowrap;
  max-width: min-content;
  justify-content: center;
  border-radius: ${({ theme }) => theme.border.radius.soft};
  background-color: ${({ theme }) => theme.colors.primary.accent};

  span {
    /* font-weight: ${({ theme }) => theme.fonts.weight.base}; */
    white-space: nowrap;
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.size.sm};
    line-height: ${({ theme }) => theme.fonts.size.md};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.accentLight};
  }

  ${({ $expand, $isExpandable }) =>
    $isExpandable &&
    css`
      justify-content: space-between;
      min-width: 5.938rem;
      transition-property: all;
      transition-duration: 0.5s;

      ${$expand &&
      css`
        min-width: 15.6rem;
        background-color: ${({ theme }) => theme.colors.primary.accentLight};
      `}

      &:hover {
        min-width: 15.6rem;
      }
    `}
`;
