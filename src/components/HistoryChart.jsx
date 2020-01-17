import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Tx from './Tx';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

const HistoryChart = ({ transactions, budget }) => {
  let labels = [];
  let maxDate = new Date().getDate();
  let newData = [];
  let newBudget = budget;

  for (let i = 1; i <= maxDate; i++) {
    labels.push(i);
    console.log('BUDGET', i, newBudget);

    let balanceForDay = transactions.reduce((acc, curr) => {
      if (new Date(curr.date).getDate() === i) {
        if (curr.category === 'income') {
          console.log(acc + curr.amount);
          return acc + curr.amount;
        } else {
          console.log(acc - curr.amount);
          return acc - curr.amount;
        }
      } else {
        return acc;
      }
    }, newBudget);

    newBudget = balanceForDay;
    newData.push(newBudget);
  }

  const dataSet = {
    labels,
    series: [newData]
  };

  if (transactions !== null) {
    const options = {
      height: '40vh'
    };

    const type = 'Line';
    return (
      <div className="card" id="chart-container">
        <h2>Your Month so Far</h2>
        <ChartistGraph data={dataSet} type={type} options={options} />
      </div>
    );
  } else {
    return null;
  }
};

export default HistoryChart;
