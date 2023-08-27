import { expect, describe, it } from 'vitest';

import { render, screen } from '@/common/helpers/test.helper';

import Icon from './icon.atom';

describe('[atom] - Icon', () => {
  it('Should render Icon', async () => {
    render(<Icon name='b-bank' id='1' />);

    expect(screen.findByTestId('1')).toBeDefined();
  });
});
