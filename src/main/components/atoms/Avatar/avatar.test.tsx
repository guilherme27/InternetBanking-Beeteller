import { expect, describe, it } from 'vitest';

import { render, screen } from '@/common/helpers/test.helper';

import { Avatar } from '..';

describe('[atom] - Avatar', () => {
  it('Should return Avatar component with image', async () => {
    render(<Avatar src={'https://i.pravatar.cc/300'} />);
    const img = await screen.findByRole('img');

    expect(img).toBeDefined();
  });
});
