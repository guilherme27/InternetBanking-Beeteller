import React from 'react';

import * as S from './circle-button.styles';

type CircleButtonProps = {
  type: 'icon' | 'image';
  fileName?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const CircleButton = ({ type, fileName, ...props }: CircleButtonProps) => {
  return (
    <S.CircleButton {...props}>
      {type === 'icon' ? (
        <i className={fileName} />
      ) : fileName ? (
        <img src={`/assets/images/${fileName}`} alt='ProfilePic' />
      ) : (
        <img src={`https://i.pravatar.cc/600`} alt='ProfilePic' />
      )}
    </S.CircleButton>
  );
};

export default CircleButton;
