import { expect, describe, it } from 'vitest';

import { render } from '@/common/helpers/test.helper';

import CardNote from './card-note.atom';

describe('[atom] - CardNote', () => {
  it('Should render CardNote', async () => {
    render(<CardNote>test card</CardNote>);

    expect('test card').toBeDefined();
  });
});
