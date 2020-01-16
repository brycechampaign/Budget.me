import React from 'react';

const Overview = ({ budget, totalSpent, income }) => {
  const totalLeft = budget - totalSpent + income;
  const percentDifference = ((totalLeft / budget) * 100).toFixed(2);
  return (
    <div id="overview" className="card">
      <div>
        <div id="overview-top">
          <h2 id="overview-heading">Overview</h2>
          <h2>
            Balance:{' '}
            <span style={totalLeft < 0 ? { color: 'red' } : { color: 'green' }}>
              {totalLeft < 0
                ? '-$' + Math.abs(totalLeft).toFixed(2)
                : '$' + totalLeft.toFixed(2)}
            </span>
          </h2>
        </div>
        <hr></hr>
        <div id="overview-stats">
          <div id="amounts-container">
            <h3>Monthly Budget: ${budget ? budget.toFixed(2) : null}</h3>
            <h3>
              Total Spent: ${totalSpent !== null ? totalSpent.toFixed(2) : null}
            </h3>
            <h3>Total Income: ${income !== null ? income.toFixed(2) : null}</h3>
          </div>
          <div id="percent-container">
            <h1 style={totalLeft < 0 ? { color: 'red' } : { color: 'green' }}>
              {Math.abs(percentDifference)}%
            </h1>
            <h3 style={{ 'margin-top': '0' }}>
              {percentDifference < 0 ? 'Over Budget' : 'Under Budget'}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
