import styled, { css } from 'styled-components';

const content = css`
  display: flex;
  height: 5rem;
  gap: 0.25rem;
  width: min-content;
  align-items: center;
  justify-content: center;
`;

export const InfoCard = styled.div`
  display: flex;
  width: inherit;
  padding-inline: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius.base};
  background-color: ${({ theme }) => theme.colors.neutral.clean};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.base};
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: [info] 1fr [value] auto;
    grid-template-rows: [top] 1fr [bottom] 1fr;
    padding: 1.5rem;
  }
`;

export const ContentType = styled.div`
  ${content}
  @media (max-width: 576px) {
    height: auto;
  }
`;

export const ContentDescription = styled.div`
  ${content}

  @media (max-width: 576px) {
    grid-column-start: info;
    grid-column-end: info;
    grid-row-start: bottom;
    grid-row-end: bottom;
    height: auto;
  }
`;

export const ContentValue = styled.div`
  ${content}
  grid-column-start: value;
  grid-column-end: value;
  grid-row-start: top;
  grid-row-end: bottom;
  height: auto;
`;
