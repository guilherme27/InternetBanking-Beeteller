import { test, expect } from 'vitest';

import { Button } from '..';

import { render } from '@/common/helpers/test.helper';

test('Should render button with right color', async () => {
  const screen = render(<Button>test</Button>);
  const button = await screen.findByRole('button');

  expect(button).toBeInTheDocument();
});
