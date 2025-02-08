export interface Transaction {
    id: number;
    status: string;
    amount: number;
    customer: {
      firstName: string;
      lastName: string;
      document: {
        type: string;
        number: string;
      };
      address: {
        city: string;
        street: string;
        number: string;
        country: string;
        state: string;
        neighborhood: string;
      };
    };
    items: {
      name: string;
      quantity: number;
      amount: number;
    }[];
    paymentMethod: {
      type: string;
      card?: {
        firstDigits: string;
        lastDigits: string;
        holderName: string;
        expirationDate: string;
        installments: number;
      };
    };
}

export interface TransactionTableProps {
  transactions: Transaction[];
}

export interface TransactionDetailsHeaderProps {
  transaction: Transaction;
}

export interface TransactionDetailsInfoProps {
  transaction: Transaction;
}