import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isTokenInResponse } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isTokenInResponse(props) ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PrivateRoute;
