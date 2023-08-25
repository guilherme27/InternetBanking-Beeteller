import styled from 'styled-components';

export const Menu = styled.div<{ selected: number }>`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 920px) {
    display: none;
  }
`;
