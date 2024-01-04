import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import RegistrationForm from '../forms/RegistrationForm';

function MainRoutes({login, signup}) {



  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/register">
          <RegistrationForm />
        </Route>

        <Route></Route>
      </Switch>
    </div>
  )
}


export default MainRoutes;