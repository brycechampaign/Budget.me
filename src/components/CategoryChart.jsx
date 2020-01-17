import React, { useState } from 'react';
import Tx from './Tx';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

const CategoryChart = ({ categoryMap, totalSpent }) => {
  const labels = Object.keys(categoryMap);
  const series = Object.values(categoryMap);

  let mostExpensive = labels[0];
  for (let category in categoryMap) {
    if (categoryMap[category] > categoryMap[mostExpensive]) {
      mostExpensive = category;
    }
  }

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
    <div className="card chart-container" id="category-container">
      <div>
        <h2>Category Distribution</h2>
        <ChartistGraph data={data} type={type} options={options} />
      </div>
      <div id="favorite-container">
        <h2>Wow, you really like:</h2>
        <span id="favorite">{mostExpensive}</span>
      </div>
    </div>
  );
};

export default CategoryChart;
