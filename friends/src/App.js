import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from './components/FriendsList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormValues: {
        username: "",
        password: "",
      },
      friendsList: [
        {
          id: 1,
          name: 'Ben',
          age: 30,
          email: 'ben@lambdaschool.com'
        },
        {
          id: 2,
          name: 'Austen',
          age: 45,
          email: 'austen@lambdaschool.com'
        },
        {
          id: 3,
          name: 'Ryan',
          age: 15,
          email: 'ryan@lambdaschool.com'
        },
      ],
    }
  }

  authCheck() {
    return localStorage.getItem("token") !== null;
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/">Login</NavLink>
        <span> </span>
        <NavLink to="/friends">Friends</NavLink>

        <Route 
          exact path="/" 
          render={props => 
            <Login {...props} loginFormValues={this.state.loginFormValues} />
          } 
        />
        <Route
          path="/friends"
          render={props => 
            <FriendsList {...props} friendsList={this.state.friendsList} authCheck={this.authCheck} />
          }
        />
      </div>
    ) 
  }
}
