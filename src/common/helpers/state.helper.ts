import { Account } from '@/common/@types/account';
import { Transation } from '@/common/@types/movement';
import { Offer } from '@/common/@types/offer';

export const initialState = {
  Account: {
    currentAccount: {
      balance: 100000,
    },
    investimentAccount: {
      amount: 100000,
    },
    creditCard: {
      currentInvoice: 100000,
    },
  } as Account,

  moviments: {
    movementId: 1000,
    account: 'CURRENT',
    compensationType: 'current',
    description: 'description',
    amount: 10000,
    datetime: new Date(),
  } as Transation,

  offer: {
    offerType: 'offerType',
    title: 'title',
    subtitle: 'subtitle',
    amount: 100000,
  } as Offer,
};
