import React from 'react';

import * as S from './icon.styles';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';
type IconProps = {
  name:
    | 'b-arrow-right'
    | 'b-bank'
    | 'b-bar-code'
    | 'b-credit-card'
    | 'b-shop'
    | 'b-notification'
    | 'b-money'
    | 'b-menu'
    | 'b-graphic'
    | 'b-graphic-2'
    | 'b-grapphic-3'
    | 'b-wallet'
    | 'b-extract'
    | 'b-arrow-top-right'
    | 'b-arrow-broke-down'
    | 'b-arrow-broke-up';
  size?: IconSize;
} & React.HTMLAttributes<HTMLElement>;

const Icon = ({ name, size = 'md' }: IconProps) => {
  return <S.Icon className={name} size={size} />;
};

export default Icon;
