import { useState } from 'react';

import { MenuItem } from '../../molecules';
import * as S from './menu.styles';

type MenuProps = {
  sections: string[];
};

const Menu = ({ sections }: MenuProps) => {
  const [selected, setSelected] = useState(0);

  const handleSelection = (index: number) => {
    setSelected(index);
  };

  return (
    <S.Menu selected={selected}>
      {sections.map((item, index) => (
        <MenuItem selected={selected === index} title={item} key={index} onClick={() => handleSelection(index)} />
      ))}
    </S.Menu>
  );
};

export default Menu;
