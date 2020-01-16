import React from 'react';

const Tx = ({ date, category, amount, recipient, notes = null }) => {
  return (
    <div className="tx">
      <p>
        {new Date(date).toLocaleString('en-US', {
          dateStyle: 'medium'
        })}
      </p>
      <div styles={{ display: 'flex', flexDirection: 'column' }}>
        <p>{recipient}</p>
        <p>{category}</p>
      </div>
      <p>{amount}</p>
    </div>
  );
};

export default Tx;
