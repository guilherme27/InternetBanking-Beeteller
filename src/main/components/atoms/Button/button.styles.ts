import styled from 'styled-components';

const minWidth = 5.938;

export const Button = styled.button`
  display: flex;
  padding-inline: 1rem;
  border: none;
  gap: 1rem;
  height: 3rem;
  min-width: 4.938rem;
  max-width: min-content;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  background-color: #ebb932;

  span {
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1rem;
  }

  &:hover {
    background-color: #f1cd6d;
  }
`;

export const GrowButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${minWidth}rem;
  transition-property: all;
  transition-duration: 0.5s;

  &:hover {
    min-width: 15.6rem;
  }
`;
