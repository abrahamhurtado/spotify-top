import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import Authorized from "./components/Authorized";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

const App = props => (
  <div>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/authorized" component={withRouter(Authorized)} />
  </div>
);

export default App;
