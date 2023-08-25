import { IconName } from '@/main/components/atoms/Icon/icon.atom';

export const iconsMapDashboard = {
  currentAccount: {
    name: 'Conta Corrente',
    icon: 'b-wallet' as IconName,
    balance: 'Saldo disponível',
  },
  investimentAccount: {
    name: 'Conta investimento',
    icon: 'b-graphic-2' as IconName,
    amount: 'Patrimônio',
  },
  creditCard: {
    name: 'Cartão de crédito',
    icon: 'b-credit-card' as IconName,
    currentInvoice: 'Fatura atual',
  },
};

export const iconsMapMovement = {
  CURRENT: {
    name: 'Conta Corrente',
    icon: 'b-wallet' as IconName,
  },
  INVESTIMENT: {
    name: 'Investimento',
    icon: 'b-graphic-2' as IconName,
  },
};
