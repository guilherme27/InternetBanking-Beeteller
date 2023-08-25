import { Typography } from '../Typography/typography.styles';
import * as S from './card-note.styles';

const CardNote = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <S.CardNote>
      <Typography size='sm'>{children}</Typography>
    </S.CardNote>
  );
};

export default CardNote;
