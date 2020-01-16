import React, { useState, useEffect } from 'react';
import TxContainer from './TxContainer';
import { getTransactionsForMonth } from '../server-helpers';

export default () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactionsForMonth('bryce', 0).then(transactions =>
      setTransactions(transactions)
    );
  }, []);

  return <TxContainer transactions={transactions} />;
};
