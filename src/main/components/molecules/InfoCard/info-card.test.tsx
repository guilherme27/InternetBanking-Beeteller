import { initialState } from '@/common/helpers/state.helper';

import { expect, describe, it } from 'vitest';

import { render } from '@/common/helpers/test.helper';

import { InfoCard } from '..';

describe('[Molecules] - InfoCard', () => {
  it('Should return with option', async () => {
    const { container } = render(<InfoCard iconName='b-wallet' transation={initialState.moviments} />);

    const divs = container.querySelectorAll('div');

    const infoCard = Array.from(divs).find((div) => {
      const pElements = div.querySelectorAll('p'); // Encontra todos os p dentro da div
      return pElements.length === 3; // Retorna true se a div contiver 3 p
    });

    expect(infoCard).toBeInTheDocument();

    const children = (await infoCard)?.childNodes;

    expect(children).toHaveLength(3);
  });
});
