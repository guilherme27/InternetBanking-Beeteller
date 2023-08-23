import { styled } from 'styled-components';

import { IconSize } from './icon.atom';

const sizes = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

export const Icon = styled.i<{ size: IconSize }>`
  font-size: ${(props) => sizes[props.size]};
`;
