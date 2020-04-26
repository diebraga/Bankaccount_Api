import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TrasactionCreate {
  title: string;

  value: number;

  type: 'outcome' | 'income';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  // function returns all transactions
  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
  }

  public create({ title, value, type }: TrasactionCreate): Transaction {
    const transaction = new Transaction({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default TransactionsRepository;
