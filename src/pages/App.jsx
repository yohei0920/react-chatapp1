import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {AuthProvider} from '../context/AuthService'
import LoggedInRoute from '../components/LoggedInRoute'

import Login from "./Login";
import Signup from "./Signup";
import Room from "./Room";

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Switch>
        <LoggedInRoute exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/" component={Room} />
      </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
