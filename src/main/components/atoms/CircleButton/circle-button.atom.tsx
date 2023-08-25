import React from 'react';

import * as S from './circle-button.styles';

const CircleButton = ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return <S.CircleButton {...props}>{children}</S.CircleButton>;
};

export default CircleButton;
