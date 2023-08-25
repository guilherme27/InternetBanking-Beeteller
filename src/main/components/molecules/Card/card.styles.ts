import styled from 'styled-components';

export const Card = styled.div<{ $focus: boolean }>`
  display: grid;
  grid-template-rows: 2rem [title] 2rem [content] 1fr;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 15.3rem;
  position: relative;
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.base};
  border-radius: ${({ theme }) => theme.border.radius.base};
  transition-property: all;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  span {
    padding: 0.25rem;
  }

  .gradient-glow {
    position: absolute;
    width: 50%;
    height: 50%;
    bottom: -10%;
    right: 0;
    border-radius: 100%;
    mix-blend-mode: normal;
    opacity: ${({ $focus }) => ($focus ? '1' : '0')};
    will-change: filter;
    filter: blur(75px);
    background: conic-gradient(
      from 180deg at 50% 50%,
      ${({ theme }) => theme.colors.primary.base} 0deg,
      ${({ theme }) => theme.colors.primary.white} 1turn
    );
    transition-property: all;
    transition-duration: 1s;
  }

  .enter {
    display: flex;
    position: absolute;
    bottom: 1.5rem;
    animation: ${({ $focus }) => ($focus ? 'fade-in-slide' : 'none')};
    opacity: ${({ $focus }) => ($focus ? '1' : '0')};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in-slide {
    0% {
      opacity: 0;
      right: 4.5rem;
    }
    50% {
      opacity: 1;
      right: 4.5rem;
    }
    100% {
      opacity: 1;
      right: 1.5rem;
    }
  }
`;
export const ContainerBody = styled.div`
  grid-row-start: content;
`;

export const Container = styled.div`
  grid-row-start: title;
`;

export const InlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
