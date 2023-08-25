import styled from 'styled-components';

export const CircleButton = styled.button`
  border-radius: ${({ theme }) => theme.border.radius.circle};
  background-color: ${({ theme }) => theme.colors.neutral.clean};
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
