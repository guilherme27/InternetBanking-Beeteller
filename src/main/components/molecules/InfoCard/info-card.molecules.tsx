import { Transation } from '@/common/@types/movement';
import Account from '@/common/enums/account.enum';
import currencyHelper from '@/common/helpers/currency.helper';

import { Typography, Icon } from '../../atoms';
import { IconName } from '../../atoms/Icon/icon.atom';
import * as S from './info-card.styles';

type InfoCardProps = {
  transation: Transation;
  iconName: IconName;
};

const InfoCard = ({ transation, iconName }: InfoCardProps) => {
  const credit = transation.compensationType === 'CREDIT';
  return (
    <S.InfoCard>
      <S.ContentType>
        <Icon size='lg' name={iconName} />
        <Typography size='sm'>{Account[transation.account]}</Typography>
      </S.ContentType>
      <S.ContentDescription>
        <Typography size='sm'>{transation.description}</Typography>
      </S.ContentDescription>
      <S.ContentValue>
        <Typography size='sm' color={credit ? 'success' : 'danger'}>{`${credit ? '+' : '-'}
        R$ ${currencyHelper.formatCurrency(transation.amount.toString())}`}</Typography>
      </S.ContentValue>
    </S.InfoCard>
  );
};

export default InfoCard;
