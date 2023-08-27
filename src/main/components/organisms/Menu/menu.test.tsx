import { expect, describe, it } from 'vitest';

import { render, screen } from '@/common/helpers/test.helper';

import { Menu } from '..';

describe('[organisms] - Menu', () => {
  it('Should return Menu with 2 buttons', async () => {
    render(<Menu data-testid='1' sections={['Menu', 'Área pix']} />);

    const menuItem = screen.getByTestId('1');

    expect(menuItem).toBeInTheDocument();

    const buttons = menuItem.childNodes;

    expect(buttons).toHaveLength(2);
  });
});
