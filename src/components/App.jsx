import React, { useState, useEffect } from 'react';
import TxContainer from './TxContainer';
import { getTransactionsForMonth, getMonthlyBudget } from '../server-helpers';
import Overview from './Overview';

export default () => {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState('bryce');
  const [monthlyBudget, setMonthlyBudget] = useState(null);
  const [month, setMonth] = useState(null);
  const [totalSpent, setTotalSpent] = useState(null);
  const [income, setIncome] = useState(null);

  const updateTransactions = () => {
    return getTransactionsForMonth(user, month).then(transactions =>
      setTransactions(transactions)
    );
  };

  const updateMonthlyBudget = () => {
    getMonthlyBudget(user, month).then(budget => setMonthlyBudget(budget));
  };

  const getTotalSpentAndIncome = () => {
    let income = 0;
    let outcome = 0;

    transactions.forEach(tx => {
      const { amount } = tx;
      if (tx.category === 'income') {
        income += amount;
      } else {
        outcome += amount;
      }
    });

    setIncome(income);
    setTotalSpent(outcome);
  };

  useEffect(() => {
    setMonth(new Date().getMonth());
  }, []);

  useEffect(() => {
    if (month !== null) {
      updateTransactions();
      updateMonthlyBudget();
    }
  }, [month]);

  useEffect(() => {
    if (transactions) {
      getTotalSpentAndIncome();
    }
  }, [transactions]);

  return (
    <>
      <h1>
        Welcome back, <span id="username">{user}</span>
      </h1>
      <Overview
        budget={monthlyBudget}
        totalSpent={totalSpent}
        income={income}
      />
      <TxContainer
        transactions={transactions}
        user={user}
        updateTransactions={updateTransactions}
      />
    </>
  );
};
