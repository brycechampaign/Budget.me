import React, { useState, useEffect } from 'react';
import BudgetForm from './BudgetForm';
import Home from './Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <Route exact path="/">
        {user ? <Redirect to={`/${user}`} /> : <Redirect to="/login" />}
      </Route>
      <Switch>
        <Route path="/login">
          <BudgetForm setUser={setUser} />
          {user ? <Redirect to={`/${user}`} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/:user">
          {user ? <Home user={user} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
