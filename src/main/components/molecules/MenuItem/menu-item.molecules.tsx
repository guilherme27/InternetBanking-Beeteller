import { Typography } from '../../atoms';
import * as S from './menu-item.styles';

type MenuItemProps = {
  selected?: boolean;
  title: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const MenuItem = ({ selected, title, onClick }: MenuItemProps) => {
  return (
    <S.MenuItem $selected={selected} onClick={onClick}>
      <Typography bold size='sm' color={selected ? 'base' : 'dark'}>
        {title}
      </Typography>
    </S.MenuItem>
  );
};

export default MenuItem;
