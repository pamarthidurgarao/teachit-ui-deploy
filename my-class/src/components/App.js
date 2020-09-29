import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useUserState } from "../context/UserContext";
import Calls from "../pages/calls/Calls";
import DailCall from "../pages/calls/DailCall";
import ReceiveCall from "../pages/calls/ReceiveCall";
import Contacts from "../pages/contacts/Contacts";
import Cource from "../pages/cources/Cource";
import Cources from "../pages/cources/Cources";
import Listner from "../pages/cources/Listner";
import Teacher from "../pages/cources/Teacher";
import Messages from "../pages/messages/Messages";
// components
import Layout from "./layout/Layout";
// pages
import Login from "./Login";
import SignUp from "./Signup";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();
  // var isAuthenticated = false;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/contacts" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/contacts" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PrivateRoute path="/app/calls" component={Calls} />
        <PrivateRoute path="/app/call/:id" component={ReceiveCall} />
        <PrivateRoute path="/app/call2/:id" component={DailCall} />
        <PrivateRoute path="/app/messages" component={Messages} />
        <PrivateRoute path="/app/contacts" component={Contacts} />
        <PrivateRoute path="/app/cources" component={Cources} />
        <PrivateRoute path="/app/cources/:id" component={Cource} />
        <PrivateRoute path="/app/class/:id" component={Teacher} />
        <PrivateRoute path="/app/class2/:id" component={Listner} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/signup" component={SignUp} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
