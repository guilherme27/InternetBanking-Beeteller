import styled from 'styled-components';

export const MenuItem = styled.button<{ $selected?: boolean }>`
  display: flex;
  padding-inline: 1rem;
  border: none;
  height: 3rem;
  min-width: 4.5rem;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.soft};
  justify-content: center;
  color: ${({ $selected, theme }) => ($selected ? `${theme.colors.neutral.clean}` : `${theme.colors.neutral.dark}`)};
  background-color: ${({ $selected, theme }) => ($selected ? `${theme.colors.neutral.clean}` : 'transparent')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.clean};
    cursor: pointer;
  }
`;
