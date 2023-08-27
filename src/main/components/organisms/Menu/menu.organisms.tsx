import { useState } from 'react';

import { MenuItem } from '../../molecules';
import * as S from './menu.styles';

type MenuProps = {
  sections: string[];
} & React.HTMLAttributes<HTMLDivElement>;

const Menu = ({ sections, ...props }: MenuProps) => {
  const [selected, setSelected] = useState(0);

  const handleSelection = (index: number) => {
    setSelected(index);
  };

  return (
    <S.Menu selected={selected} {...props}>
      {sections.map((item, index) => (
        <MenuItem selected={selected === index} title={item} key={index} onClick={() => handleSelection(index)} />
      ))}
    </S.Menu>
  );
};

export default Menu;
