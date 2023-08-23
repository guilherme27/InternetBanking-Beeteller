import styled from 'styled-components';

export const MenuItem = styled.button<{ $selected?: boolean }>`
  display: flex;
  padding-inline: 1rem;
  border: none;
  height: 3rem;
  min-width: 4.5rem;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  color: ${(props) => (props.$selected ? '#2f2f2f' : '#666666')};
  background-color: ${(props) => (props.$selected ? '#ededed' : 'transparent')};

  &:hover {
    background-color: #ededed;
    cursor: pointer;
    span {
      color: #2f2f2f;
    }
  }

  span {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 600;
    color: #666666;
  }
`;
