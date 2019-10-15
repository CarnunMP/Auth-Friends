import React, { useEffect } from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from './components/FriendsList';

import withAuth from "./axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormValues: {
        username: "",
        password: "",
      },
      friendsList: [],
    }
  }

  componentDidMount() {
    withAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        this.setState({
          friendsList: res.data,
        });
      })
      .catch(err => {
        debugger
      });
  }

  authCheck() {
    return localStorage.getItem("token") !== null;
    // Not very secure! :P
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
