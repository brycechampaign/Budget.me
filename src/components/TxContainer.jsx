import React from 'react';
import Tx from './Tx';

const TxContainer = ({ transactions }) => {
  return (
    <div id="txContainer">
      <h2 id="txContainerHeader">Transactions</h2>
      <hr></hr>
      {transactions.map(tx => {
        const { date, category, amount, recipient, notes } = tx;
        return (
          <>
            <Tx
              date={date}
              category={category}
              amount={amount}
              recipient={recipient}
              notes={notes}
            />
            <hr></hr>
          </>
        );
      })}
    </div>
  );
};

export default TxContainer;
