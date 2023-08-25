import styled from 'styled-components';

export const OfferCard = styled.div`
  display: grid;
  height: 23rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  grid-template-rows: 9.5rem 1fr;
  border-radius: ${({ theme }) => theme.border.radius.base};
  background-color: ${({ theme }) => theme.colors.neutral.clean};
  transition-property: all;
  transition-duration: 0.5s;

  &:hover {
    grid-template-rows: 11.5rem 1fr;
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

export const CardImage = styled.div<{ $visible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  position: relative;

  .yellowFilter {
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    mix-blend-mode: multiply;
    transition: all 0.5s ease-in-out;
    opacity: ${({ $visible }) => ($visible ? '0.3' : '0')};
    border-radius: ${({ theme }) => theme.border.radius.base};
    background-color: ${({ theme }) => theme.colors.primary.accent};
  }
`;

export const CardDetails = styled.div<{ $visible: boolean }>`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1rem 1.5rem;
  width: calc(100% - 3rem);
  height: calc(100% - 2rem);
  position: relative;

  button {
    margin-top: 0.5rem;
  }

  .icon {
    position: absolute;
    top: 1rem;
    opacity: ${({ $visible }) => ($visible ? '1' : '0')};
    height: ${({ $visible }) => ($visible ? '100%' : '0')};
    transition: all 0.2s ease-in;
  }
`;

export const DetailsInLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
`;
