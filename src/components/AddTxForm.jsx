import React, { useState } from 'react';
import Modal from 'react-modal';
import { addTransaction } from '../server-helpers';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%'
  }
};

Modal.setAppElement('#root');

const AddTxForm = ({ user, updateTransactions }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState();
  const [recipient, setRecipient] = useState();
  const [date, setDate] = useState();
  const [notes, setNotes] = useState('');
  const [isIncome, setIsIncome] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const tx = {
      amount,
      category,
      recipient,
      date,
      notes
    };

    if (recipient === undefined) tx.recipient = 'Deposit';
    if (category === undefined) tx.category = 'income';

    addTransaction(user, tx)
      .then(() => updateTransactions())
      .then(() => closeModal());
  };

  return (
    <div>
      <button onClick={openModal} id="add-tx-button">
        Add Transaction
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Add Transaction</h2>

        <form onSubmit={handleSubmit}>
          <div id="add-tx-form">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              onChange={e => setAmount(e.target.value)}
            />
            <br />

            <label htmlFor="isIncome">Income</label>
            <input
              type="checkbox"
              name="isIncome"
              value="income"
              onChange={e => setIsIncome(!isIncome)}
            />

            <br></br>

            <label htmlFor="category">Category</label>
            <input
              name="category"
              id="category"
              onChange={e => setCategory(e.target.value)}
              disabled={isIncome}
            />
            <br />
            <label htmlFor="recipient">Recipient</label>
            <input
              name="recipient"
              id="recipient"
              onChange={e => setRecipient(e.target.value)}
              disabled={isIncome}
            />
            <br />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={e => setDate(e.target.value)}
            />
            <br />
            <label htmlFor="notes">Notes</label>
            <input
              type="textarea"
              name="notes"
              id="notes"
              onChange={e => setNotes(e.target.value)}
            />
            <br />
            <div id="add-tx-buttons">
              <button onClick={closeModal}>Cancel</button>
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTxForm;
