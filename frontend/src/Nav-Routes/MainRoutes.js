import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from "../forms/LoginForm";
import RegistrationForm from '../forms/RegistrationForm';
import Homepage from '../Homepage';


function MainRoutes() {



  return (
    <div>
      <Routes>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/register">
          <RegistrationForm />
        </Route>

      </Routes>
    </div>
  )
}


export default MainRoutes;