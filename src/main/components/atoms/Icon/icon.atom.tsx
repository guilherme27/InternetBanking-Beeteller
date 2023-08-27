import React from 'react';

import * as S from './icon.styles';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconName =
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

export type IconProps = {
  name: IconName;

  size?: IconSize;
  color?: 'base' | 'white' | 'black' | 'dark' | 'success' | 'danger' | 'accent';
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const Icon = ({ name, className, size = 'md', color = 'base', ...props }: IconProps) => {
  return <S.Icon className={`${name} ${className}`} size={size} color={color} {...props} />;
};

export default Icon;
