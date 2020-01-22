import React, { useState, useEffect } from 'react';
import { getTransactionsForMonth, getMonthlyBudget } from '../server-helpers';
import Overview from './Overview';
import HistoryChart from './HistoryChart';
import CategoryChart from './CategoryChart';
import TxContainer from './TxContainer';

export default ({ user }) => {
  const [transactions, setTransactions] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState(null);
  const [month, setMonth] = useState(null);
  const [totalSpent, setTotalSpent] = useState(null);
  const [income, setIncome] = useState(null);
  const [categories, setCategories] = useState({});

  const updateTransactions = () => {
    return getTransactionsForMonth(user, month).then(transactions =>
      setTransactions(transactions)
    );
  };

  const updateMonthlyBudget = () => {
    getMonthlyBudget(user, month).then(budget => setMonthlyBudget(budget));
  };

  const getStats = () => {
    let income = 0;
    let outcome = 0;
    const categoriesTemp = {};

    transactions.forEach(tx => {
      const { amount, category } = tx;

      if (category === 'income') {
        income += amount;
      } else {
        const categoryAmount = categoriesTemp[category];

        if (categoryAmount === undefined) {
          categoriesTemp[category] = amount;
        } else {
          categoriesTemp[category] = categoryAmount + amount;
        }

        outcome += amount;
      }
    });

    setCategories(categoriesTemp);
    setIncome(income);
    setTotalSpent(outcome);
  };

  useEffect(() => {
    setMonth(new Date().getMonth());
    updateMonthlyBudget();
    updateTransactions();
  }, [user]);

  useEffect(() => {
    if (month !== null) {
      updateTransactions();
      updateMonthlyBudget();
    }
  }, [month]);

  useEffect(() => {
    if (transactions) {
      getStats();
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
      {transactions !== null &&
      transactions.length > 0 &&
      monthlyBudget !== null &&
      transactions ? (
        <HistoryChart transactions={transactions} budget={monthlyBudget} />
      ) : null}
      {transactions !== null &&
      transactions.length > 0 &&
      transactions &&
      Object.keys(categories).length > 0 ? (
        <CategoryChart categoryMap={categories} totalSpent={totalSpent} />
      ) : null}
    </>
  );
};
