import React from 'react';
import Tx from './Tx';
import AddTxForm from './AddTxForm';

const TxContainer = ({ transactions, user, updateTransactions }) => {
  return (
    <div id="txContainer" className="card">
      <div id="container-head">
        <h2 id="txContainerHeader">Transactions</h2>
        <AddTxForm user={user} updateTransactions={updateTransactions} />
      </div>

      <div id="tx-body">
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TxContainer;
