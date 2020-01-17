import React, { useState } from 'react';

const getMonthString = num => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return months[num];
};

const Tx = ({ date, category, amount, recipient, notes = null }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dateObj = new Date(date);
  const isIncome = category === 'income';

  return (
    <div className="tx card" onClick={() => setIsExpanded(!isExpanded)}>
      <div id="tx-main">
        <div id="tx-date">
          <p>{getMonthString(dateObj.getMonth())}</p>
          <p>{dateObj.getDate() + 1}</p>
        </div>
        <div
          className="tx-middle"
          styles={{ display: 'flex', flexDirection: 'column' }}
        >
          <p>{recipient}</p>
          <p id="category">{category}</p>
        </div>
        <p
          className="tx-amount"
          style={isIncome ? { color: 'green' } : { color: 'red' }}
        >
          {(isIncome ? '+' : '-') + '$' + amount.toFixed(2)}
        </p>
      </div>
      {isExpanded ? (
        <div id="tx-expanded">
          <p>{notes}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Tx;
