import styled from 'styled-components';

export const CircleButton = styled.button`
  border-radius: 100%;
  background-color: #ededed;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  i {
    font-size: 1.5rem;
  }

  img {
    height: auto;
    max-width: 150%;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;
