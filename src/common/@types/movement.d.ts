export type Transation = {
  movementId: number;
  account: 'CURRENT' | 'INVESTIMENT';
  compensationType: string;
  description: string;
  amount: number;
  datetime: Date;
};
