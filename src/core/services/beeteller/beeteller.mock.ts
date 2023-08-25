import { rest } from 'msw';

const api = 'https://apimocha.com';
const DELAY = 2000;

export const beetellerMock = [
  rest.get(`${api}/beeteller/dashboard`, (__, res, ctx) => {
    return res(
      ctx.delay(DELAY),
      ctx.status(200),
      ctx.json({
        currentAccount: {
          balance: 130981.2,
        },
        investimentAccount: {
          amount: 33817.8,
        },
        creditCard: {
          currentInvoice: 2631.09,
        },
      }),
    );
  }),

  rest.get(`${api}/beeteller/movement`, (__, res, ctx) => {
    return res(
      ctx.delay(DELAY),
      ctx.status(200),
      ctx.json([
        {
          movementId: 103912,
          account: 'CURRENT',
          compensationType: 'CREDIT',
          description: 'Pix recebido - João José Marques',
          amount: 227.98,
          datetime: '2023-03-01T15:10:03-03:00',
        },
        {
          movementId: 817291,
          account: 'CURRENT',
          compensationType: 'DEBIT',
          description: 'Pix enviado - Yuri José',
          amount: 5000.0,
          datetime: '2023-02-20T10:10:03-03:00',
        },
        {
          movementId: 889012,
          account: 'INVESTIMENT',
          compensationType: 'CREDIT',
          description: 'Dividendos recebidos - IRDM11',
          amount: 1200.0,
          datetime: '2023-02-17T10:10:03-03:00',
        },
        {
          movementId: 81726,
          account: 'INVESTIMENT',
          compensationType: 'CREDIT',
          description: 'Dividendos recebidos - ALZR11',
          amount: 700.95,
          datetime: '2023-02-16T10:10:03-03:00',
        },
        {
          movementId: 281723,
          account: 'INVESTIMENT',
          compensationType: 'CREDIT',
          description: 'Dividendos recebidos - PLCR11',
          amount: 89.0,
          datetime: '2023-02-14T10:10:03-03:00',
        },
      ]),
    );
  }),

  rest.get(`${api}/beeteller/offers`, (__, res, ctx) => {
    return res(
      ctx.delay(DELAY),
      ctx.status(200),
      ctx.json({
        offers: [
          {
            offerType: 'loan',
            title: 'Empréstimo Beeteller',
            subtitle: 'Valor disponível de até',
            amount: 100000,
          },
        ],
      }),
    );
  }),
];
