import * as S from './menu-item.styles';

type MenuItemProps = {
  selected?: boolean;
  title: string;
};

const MenuItem = ({ selected, title }: MenuItemProps) => {
  return (
    <S.MenuItem $selected={selected}>
      <span>{title}</span>
    </S.MenuItem>
  );
};

export default MenuItem;
