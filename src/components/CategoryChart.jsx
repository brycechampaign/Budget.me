import React, { useState } from 'react';
import Tx from './Tx';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

const CategoryChart = ({ categoryMap, totalSpent }) => {
  const labels = Object.keys(categoryMap);
  const series = Object.values(categoryMap);

  const data = {
    series,
    labels
  };

  const options = {
    height: '400px',
    width: '400px',
    donut: false
  };

  const type = 'Pie';
  return (
    <div className="card chart-container">
      <h2>Category Distribution</h2>
      <ChartistGraph data={data} type={type} options={options} />
    </div>
  );
};

export default CategoryChart;
