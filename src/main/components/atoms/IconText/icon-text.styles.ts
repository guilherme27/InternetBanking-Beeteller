import { styled } from 'styled-components';

type IconTextProps {
  $icon?: boolean;
  $inline?: boolean;
  $colorIcon?: string;
  $colorText?: string;
}

const IconText = styled.div<IconTextProps>`
  display: flex;
  flex-direction: ${(props) => (props.$inline? 'row' : 'column')};
  gap: ${(props) => (props.$inline? '0.25rem' : '0.5rem')};
  
  i {
    font-size: 1.5rem;
    color: ${(props) => (props.$colorIcon? {$colorIcon} : )};
  }

`;
