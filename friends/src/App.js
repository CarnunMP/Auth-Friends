import React from 'react';
import './App.css';
import { Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';

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

    this.history = props.history;
    
    this.addNewFriend = this.addNewFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
      withAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        this.setState({
          friendsList: res.data,
        });
      })
      .catch(err => {
        alert(err.response.data.error);
      });
  }

  authCheck() {
    return localStorage.getItem("token") !== null;
    // Not very secure! :P
  }

  addNewFriend(formValues) {
    withAuth().post("http:///localhost:5000/api/friends", formValues)
        .then(res => {
            this.setState({
              friendsList: res.data,
            });
        })
        .catch(err => {
            alert(err.response.data.error);
        });
  }

  removeFriend(id) {
    withAuth().delete(`http:///localhost:5000/api/friends/${id}`)
    .then(res => {
        this.setState({
          friendsList: res.data,
        })
    })
    .catch(err => {
      alert(err.response.data.error);
    });
  }

  logOut() {
    localStorage.removeItem("token");
    this.history.push("/");
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
            <>
              <NewFriendForm addNewFriend={this.addNewFriend}/>
              <FriendsList 
                {...props} 
                friendsList={this.state.friendsList}
                authCheck={this.authCheck}
                removeFriend={this.removeFriend} 
              />
            </>
          }
        />
        <button onClick={this.logOut}>Log Out</button>
      </div>
    ) 
  }
}