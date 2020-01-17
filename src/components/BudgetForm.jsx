import React, { useState } from 'react';
import { createBudget, checkUser } from '../server-helpers';

const BudgetForm = ({ setUser: setAppUser }) => {
  const [user, setUser] = useState('');
  const [goal, setGoal] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    checkUser(user).then(doesExist => {
      if (doesExist) {
        setAppUser(user);
      } else {
        createBudget(user, new Date().getMonth(), goal).then(() =>
          setAppUser(user)
        );
      }
    });
  };

  return (
    <div id="budget-form-container">
      <h1>Create a New Budget</h1>
      <div className="card" id="budget-form-card">
        <form id="budget-form" onSubmit={e => handleSubmit(e)}>
          <div className="budget-form-item">
            <label htmlFor="user">Username</label>
            <br />
            <input
              type="text"
              name="user"
              id="user"
              onChange={e => setUser(e.target.value)}
            />
          </div>

          <div className="budget-form-item" id="month-number">
            <div>
              <label htmlFor="goal">Target budget</label>
              <br />
              <input
                type="number"
                name="goal"
                id="goal"
                onChange={e => setGoal(e.target.value)}
              />
            </div>
          </div>

          <input type="submit" value="Create Budget" />
        </form>
      </div>
    </div>
  );
};

export default BudgetForm;
