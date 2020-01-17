import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Tx from './Tx';

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

  console.log(newData);

  const dataSet = {
    labels,
    datasets: [
      {
        label: 'Balance',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: newData
      }
    ]
  };

  if (transactions !== null) {
    return (
      <div className="card" id="chart-container">
        <Line data={dataSet} />
      </div>
    );
  } else {
    return null;
  }
};

export default HistoryChart;
