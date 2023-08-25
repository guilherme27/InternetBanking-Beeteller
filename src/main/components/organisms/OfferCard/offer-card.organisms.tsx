import { useState } from 'react';

import { Offer } from '@/common/@types/offer';

import { Button, Icon, Typography, Image } from '../../atoms';
import { IconName } from '../../atoms/Icon/icon.atom';
import * as S from './offer-card.styles';

type OfferCardProps = {
  src: string;
  offer: Offer;
  hasButton: string;
  iconName: IconName;
} & React.HTMLAttributes<HTMLDivElement>;

const OfferCard = ({ src, iconName, hasButton, offer, children }: OfferCardProps) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <S.OfferCard onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)}>
      <S.CardImage $visible={isFocus}>
        <Image src={src} />
        <div className='yellowFilter' />
      </S.CardImage>
      <S.CardDetails $visible={!isFocus}>
        <Icon size='lg' name={iconName} className='icon' />
        <Typography>{offer?.title || ''}</Typography>
        <Typography size='sm' color='dark'>
          {offer?.subtitle || ''}
        </Typography>
        <S.DetailsInLine>{children}</S.DetailsInLine>
        {hasButton && (
          <Button isExpandable isExpand={isFocus}>
            {hasButton}
          </Button>
        )}
      </S.CardDetails>
    </S.OfferCard>
  );
};

export default OfferCard;
