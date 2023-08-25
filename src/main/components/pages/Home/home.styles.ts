import { css, styled } from 'styled-components';

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr [content-line] 5.5rem;
  height: 100%;
`;

export const CardContainer = styled.div`
  grid-row-start: content-line;
`;

export const InlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TitleGroup = styled.div`
  margin: 1rem 0;
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 2rem;
`;

export const Menu = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.base};
  background-color: ${({ theme }) => theme.colors.neutral.light};
  padding: 1.5rem;
  width: 100vw;
  height: auto;
  top: 0;
  display: flex;
  position: fixed;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const MenuOptions = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;

  @media (max-width: 576px) {
    button:not(:nth-child(2)) {
      display: none;
    }

    div {
      display: none;
    }
  }
`;

export const Wrapper = styled.div<{ $loading: boolean }>`
  ${({ $loading }) =>
    $loading &&
    css`
      & *:not(div, p) {
        visibility: hidden;
      }

      p {
        color: transparent;
        background-color: gray;
        border-radius: 2.5rem;
        animation: animateBg 1s linear infinite;
        background-image: linear-gradient(90deg, #f0f0f0, #bababa, #f0f0f0, #bababa);
        background-size: 300% 100%;
      }
      @keyframes animateBg {
        0% {
          background-position: 100% 0%;
        }
        100% {
          background-position: 0%0%;
        }
      }

      div:not(.ignoreLoading) {
        background: ${({ theme }) => theme.colors.neutral.clean};
        pointer-events: none;
      }
    `}
`;

export const Brand = styled.div`
  display: flex;
  width: 8rem;
  height: 2rem;
`;

export const PageContent = styled.div`
  height: calc(100vh - 6.5rem);
  width: 100vw;
  margin-top: 6.5rem;
  overflow-y: auto;
  overflow-x: hidden;
`;
