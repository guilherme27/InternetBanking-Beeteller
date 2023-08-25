import styled from 'styled-components';

export const Avatar = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.border.radius.circle};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;
