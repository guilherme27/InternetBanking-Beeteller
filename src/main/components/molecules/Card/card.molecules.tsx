import { useState } from 'react';

import { Icon, Typography } from '../../atoms';
import CardNote from '../../atoms/CardNote/card-note.atom';
import { IconName } from '../../atoms/Icon/icon.atom';
import * as S from './card.styles';

type CardProps = {
  title: string;
  hasNote?: string;
  hasButton?: boolean;
  iconName?: IconName;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ title, hasNote, hasButton, iconName, children }: CardProps) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <S.Card $focus={isFocus} onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
      <S.InlineContainer>
        {iconName && <Icon size='lg' color='accent' name={iconName} />}
        {hasNote && <CardNote>{hasNote}</CardNote>}
      </S.InlineContainer>
      <S.Container>
        <Typography size='sm' color='light'>
          {title}
        </Typography>
      </S.Container>
      <S.ContainerBody>{children}</S.ContainerBody>
      {hasButton && (
        <div className='enter'>
          <Icon name='b-arrow-right' color='accent' size='lg' />
        </div>
      )}

      <div className='gradient-glow' />
    </S.Card>
  );
};

export default Card;
