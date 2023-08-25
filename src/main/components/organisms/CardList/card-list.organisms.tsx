import { Transation } from '@/common/@types/movement';
import { iconsMapMovement } from '@/common/helpers/icons-map.helper';

import { InfoCard } from '../../molecules';
import * as S from './card-list.styles';

type CardListProps = {
  cards: Transation[];
};

const CardList = ({ cards }: CardListProps) => {
  return (
    <S.CardList className='ignoreLoading'>
      {cards.map((item, index) => (
        <InfoCard transation={item} key={index} iconName={iconsMapMovement[item.account].icon} />
      ))}
    </S.CardList>
  );
};

export default CardList;
