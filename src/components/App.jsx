import React, { useState, useEffect } from 'react';
import TxContainer from './TxContainer';
import { getTransactionsForMonth } from '../server-helpers';

export default () => {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState('bryce');

  const updateTransactions = () => {
    return getTransactionsForMonth(user, 0).then(transactions =>
      setTransactions(transactions)
    );
  };

  useEffect(() => {
    updateTransactions();
  }, []);

  return (
    <TxContainer
      transactions={transactions}
      user={user}
      updateTransactions={updateTransactions}
    />
  );
};
