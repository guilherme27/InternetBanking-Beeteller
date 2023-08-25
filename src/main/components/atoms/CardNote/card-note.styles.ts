import styled from 'styled-components';

export const CardNote = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.size.sm};
  border-radius: ${({ theme }) => theme.border.radius.soft};
  background-color: ${({ theme }) => theme.colors.primary.accent};
`;
